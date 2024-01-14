import React from "react";
import "./signinButton.css";

const SigninButton = (props) => {
  return (
    <button
      onClick={props.action}
      className="event-button bg-transparent w-fit text-center flex justify-center items-center font-ticketing text-3xl px-5 py-2 mx-auto"
    >
      {props.buttonText}
    </button>
  );
};

export default SigninButton;
