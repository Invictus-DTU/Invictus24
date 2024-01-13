import React from 'react'
import './signinButton.css'

const SigninButton = (props) => {

  return (
    <button onClick={props.action} className="event-button bg-transparent w-full text-center flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[4vw] md:text-[2vw] lg:text-[1.5vw]  px-5 py-2" >
      {props.buttonText}
    </button>
  )
}

export default SigninButton