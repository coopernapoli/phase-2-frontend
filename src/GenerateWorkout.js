import React, { useState } from "react";
import "./App.css";

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const GenerateWorkout = () => {
  const [workout, setWorkout] = useState([]);

  const fetchExercises = async () => {
    const response = await fetch("http://localhost:5000/exercises");
    const exerciseData = await response.json();
    const generatedWorkout = generateWorkout(exerciseData);
    setWorkout(generatedWorkout);
  };

  const generateWorkout = (exerciseData) => {
    const lowerBody = getRandomElement(exerciseData["lower-body"]);
    const upperBody = getRandomElement(exerciseData["upper-body"]);
    const cardio = getRandomElement(exerciseData.cardio);

    const lowerPrescription = getRandomElement(lowerBody.prescriptions);
    const upperPrescription = getRandomElement(upperBody.prescriptions);
    const cardioPrescription = getRandomElement(cardio.prescriptions);

    return [
      { ...lowerBody, prescription: lowerPrescription },
      { ...upperBody, prescription: upperPrescription },
      { ...lowerBody, prescription: lowerPrescription },
      { ...upperBody, prescription: upperPrescription },
      { ...cardio, prescription: cardioPrescription },
    ];
  };

  const handleClick = () => {
    fetchExercises();
  };

  return (
    <div id= 'radndomWorkout'className="random-workout">
      <h1>Random Workout</h1>
      <button onClick={handleClick}>Generate Workout!!!</button>
      {workout.length > 0 && (
        <div className="workout-container">
          <ol>
            {workout.map((exercise, index) => (
              <li key={index}>
                {exercise.name} - {exercise.prescription.sets} Sets of {exercise.prescription.reps || exercise.prescription.work} {exercise.prescription.reps ? 'Reps' : 'Seconds'} - {exercise.cue}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default GenerateWorkout;
