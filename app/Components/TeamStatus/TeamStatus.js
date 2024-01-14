"use client";
import React, { useState, useEffect } from "react";
import "./TeamStatus.css";
import TeamCard from "./TeamCard";

export const TeamStatus = ({ teams }) => {
  const [team, setTeam] = useState(teams);
  useEffect(() => {
    setTeam(teams);
    console.log("hi:", team);
  }, [teams]);
  return (
    <div className="TeamStatus md:w-4/5 max-md:w-full py-4 mx-auto my-16">
      <div className="heading text-5xl">Events Status</div>
      {team &&
        team.map((val, index) => <TeamCard key={index} property={val} />)}
    </div>
  );
};
