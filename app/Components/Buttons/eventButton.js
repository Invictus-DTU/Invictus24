import React from "react";
import "./homeButton.css";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";

const EventButton = (props) => {
  return (
    <button
      onClick={props.action}
      className="event-button w-fit h-fit flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[5vw] md:text-[3vw] lg:text-[2vw]  px-5 py-1 my-1 mx-2"
    >
      <p className="z-2">{props.title}</p>
    </button>
  );
};

export default EventButton;
