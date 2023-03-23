import React from 'react';

function handleSubmit(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const goal = formData.get('goals');
  const coaching = formData.getAll('question3');
  const location = formData.get('question4');
  const nutrition = formData.get('question5');

  // Reset the form
  event.target.reset();
  console.log('Creating success container');
  const successContainer = document.createElement("div");
  successContainer.className = "success-container";

  console.log('Creating success message');
  const successMessage = document.createElement("p");
  successMessage.textContent = `Hello ${name}, we will reach out to you shortly at ${email}!`;
  successContainer.appendChild(successMessage);

  console.log('Creating close button');
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => {
    successContainer.parentNode.removeChild(successContainer);
  });
  successContainer.appendChild(closeButton);

  console.log('Inserting success container');
  const contactContainer = document.getElementById("contactContainer");
  contactContainer.parentNode.insertBefore(successContainer, contactContainer.nextSibling);
}

function Contact() {

    
    return (
      <div id="contactContainer">
        <h1 className='header'>Submit Application</h1>
        <form onSubmit={handleSubmit}>
          <label className='label'>
            Name:
            <input type="text" name="name" />
          </label>
          <label className='label'>
            Email:
            <input type="email" name="email" />
          </label>
          <label className='label'>
            Question 1: In your own words, how would you describe your goal? Be subjective and objective. <br></br>
            <textarea id='goals'></textarea>
          </label>
          <label className='label'>
            Question 2: Have you ever worked with a coach before towards this goal? <br></br>
            <input type="radio" name="question2" value="yes" /> Yes
            <input type="radio" name="question2" value="no" /> No
          </label>
        <label className='label'>
            
            Question 3: What style(s) of coaching do you like?
        `   <div>
                <label>
                <input type="checkbox" name="question3" value="option1" />
                Direct - Tell me how things are for me as simply as possible and as directly as possible.
                </label>
                <br />
                <label>
                <input type="checkbox" name="question3" value="option2" />
                Authoritarian - I want to show up and have you tell me what to do and how to do it.
                </label>
                <br />
                <label>
                <input type="checkbox" name="question3" value="option3" />
                Informative - I need to know the why behind what we are doing to be invested.
                </label>
                <br />
                <label>
                <input type="checkbox" name="question3" value="option4" />
                Visionary - I need direction and motivation towards something positive for myself.
                </label>
                <br />
                <label>
                <input type="checkbox" name="question3" value="option5" />
                Spirited - I need this to be a place where I know I will receive positive support relative to my life and goals.
                </label>
            </div>
            </label>
          <label className='label'>
            Question 4: Will you train live or online? <br></br>
            <input type="radio" name="question2" value="live" /> Live
            <input type="radio" name="question2" value="online" /> Online
          </label>
          <label className='label'>
            Question 5: How would you rate your nutrition? <br></br>
            <select name="question5">
              <option value="option1">Poor - I track nothing, eat anything, and feel terrible.</option>
              <option value="option2">Okay - I loosely track and monitor what I eat. I lack understanding of how I am positively or negatively impacted by food.</option>
              <option value="option3">Good - I track caloric intake and know the quality of my food. I feel good with what I eat and know what I should avoid.</option>
              <option value="option4">Excellent - I track macronutrient intake with precision and eat from clean food sources. I can tell you how I will feel with accuracy </option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }


 
export default Contact;