import React from 'react'
import { TeamStatus } from './TeamStatus/TeamStatus'
import WorkshopCard from './EventCard/WorkshopCard'
import {InputForm} from "./Form/InputForm";
const Profile = () => {
  return (
    <>
    <InputForm/>
    <TeamStatus/>
    {/* <WorkshopCard/> */}
    </>
  )
}

export default Profile;
