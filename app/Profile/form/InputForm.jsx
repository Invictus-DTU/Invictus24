import React from 'react'
import "./InputForm.css";

export const InputForm = () => {
  return (
    <div className='InputForm' w-100>
    <h1 id='ourProfile' className='w-100'> Our Profile</h1>
    <div className='btnDiv w-100'>
      <div className="editBtn">
        <img src="/Pen.png" alt="" /><span>edit</span>
      </div>
    </div>
    <form action="submit_form.php" method="post">

    <label for="name">Name</label>
    <input type="text" id="name" name="name" required/>

    <label for="email">Email Address</label>
    <input type="email" id="email" name="email" required/>

    <label for="team">Team Name</label>
    <input type="text" id="team" name="team" required/>

    <label for="phone">Phone No.</label>
    <input type="tel" id="phone" name="phone" required/>

    <label for="college">College Name</label>
    <input type="text" id="college" name="college" required/>

    <div class="pixel2"><span>SUBMIT INFO</span></div>
    </form>
    </div>

  )
}
