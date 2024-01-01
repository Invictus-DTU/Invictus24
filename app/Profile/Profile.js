import React from 'react'
import { TeamStatus } from './TeamStatus/TeamStatus'
import {InputForm} from "./Form/InputForm";
import "./Profile.css";
// import EventCard from './EventCard/EventCard';
import Events from "./EventCard/Events";
export const Profile = () => {
  return (
    <>
    <div style={{height:"100px"}}></div>
    <InputForm/>
    <TeamStatus/>
    {/* <EventCard/> */}
    <Events/>
    </>
  )
}
