import React from 'react'
import "./Form.css";

export const Form = () => {
  return (
    <div className='container'>
    <h1> Our Profile</h1>

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

    <div class="pixel2"><p>SUBMIT INFO</p></div>
    </form>
    </div>
  )
}
