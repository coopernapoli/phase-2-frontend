import React, { useState, useEffect } from "react";
import "./App.css";

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const GenerateWorkout = () => {
  const [workout, setWorkout] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    const response = await fetch("http://localhost:5001/exercises");
    const exerciseData = await response.json();
    const generatedWorkout = generateWorkout(exerciseData);
    setWorkout(generatedWorkout);
    setResults(generatedWorkout.reduce((acc, exercise) => ({ ...acc, [exercise.id]: [] }), {}));
  };

  const generateWorkout = (exerciseData) => {
    const lowerBody1 = getRandomElement(exerciseData["lower-body"]);
    const upperBody1 = getRandomElement(exerciseData["upper-body"]);
    const lowerBody2 = getRandomElement(exerciseData["lower-body"]);
    const upperBody2 = getRandomElement(exerciseData["upper-body"]);
    const cardio = getRandomElement(exerciseData.cardio);

    const lowerPrescription1 = getRandomElement(lowerBody1.prescriptions);
    const upperPrescription1 = getRandomElement(upperBody1.prescriptions);
    const lowerPrescription2 = getRandomElement(lowerBody2.prescriptions);
    const upperPrescription2 = getRandomElement(upperBody2.prescriptions);
    const cardioPrescription = getRandomElement(cardio.prescriptions);

    return [
      { ...lowerBody1, prescription: lowerPrescription1, weight:0},
      { ...upperBody1, prescription: upperPrescription1, weight:0},
      { ...lowerBody2, prescription: lowerPrescription2, weight:0 },
      { ...upperBody2, prescription: upperPrescription2, weight:0 },
      { ...cardio, prescription: cardioPrescription, distance:0 },
    ];
  };
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setResults((prevState) => ({
      ...prevState,
      [index]: value,
    }));
  };

  const workoutResults = workout.map((exercise, index) => {
    return {
      exerciseId: exercise.id,
      result: results[index],
    };
  });

  const handleSubmit = () => {
    fetch("http://localhost:5001/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workoutResults),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleClick = () => {
    fetchExercises();
  };


  return (
    <div id= 'radndomWorkout'className="random-workout">
      <h1 className="header">Random Workout</h1>
      <button id="generateWorkoutBtn" onClick={handleClick}>Generate Workout</button>
      {workout.length > 0 && (
        <div className="workout-container">
          <ol>
            {workout.map((exercise, index) => (
              <li key={index}>
                {exercise.name} - {exercise.prescription.sets} 
                Sets of {exercise.prescription.reps || exercise.prescription.work}
                 {exercise.prescription.reps ? 'Reps' : 'Seconds'} - {exercise.cue}
                <input 
                  type="number"
                  value={results[index] || ""}
                  onChange={(event) => handleInputChange(index, event)}
                  placeholder={index < 4 ? "lbs" : index === 4 ? "calories" : ""}
                />
              </li>
            ))}
          </ol>
          <button onClick={handleSubmit}>Submit Results</button>
        </div>
      )}
    </div>
  );
};
export default GenerateWorkout;
