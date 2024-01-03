import React from 'react'
import "./InputForm.css";
import EventButton from '../Components/Buttons/eventButton';

const InputForm = () => {
  return (
    <div className='InputForm' w-100>
      <h1 id='ourProfile' className='w-100'>Our Profile</h1>

      <form action="submit_form.php" method="post">

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required/>

        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required/>

        <label for="team">Team Name</label>
        <input type="text" id="team" name="team" required/>

        <label for="phone">Phone No.</label>
        <input type="tel" id="phone" name="phone" required/>

        <label for="college">College Name</label>
        <input type="text" id="college" name="college" required/>

        <div className='flex justify-center items-center'>
            <EventButton action="" buttonText="Save Info" />
        </div>
        
        
      </form>
    </div>
  )
}

export default InputForm;