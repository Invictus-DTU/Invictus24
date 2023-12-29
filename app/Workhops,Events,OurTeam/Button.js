"use client";
import { useState } from "react";
import ButtonRegEvent from "./regEventButton.js";
import ButtonRegEvent2 from "./regEventButton2.js";

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? <ButtonRegEvent2 /> : <ButtonRegEvent />}
    </div>
  );
};

export default Button;
