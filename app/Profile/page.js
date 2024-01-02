import React from 'react'
import { TeamStatus } from '../Components/TeamStatus/TeamStatus'
import InputForm from "../InputForm/page"

const Profile = () => {
  return (
    <div className='h-[300vh] bg-[#05063f]'>
        <img src='/bg2.png' className=' w-full absolute h-[300vh] top-0 left-0 shrink-0 object-cover opacity-30 z-2  ' />
        <div className='h-[100px]'></div>
        <div className='w-full h-[300vh] absolute z-1'>
          <InputForm/>
          <TeamStatus/>
        </div>
        {/* <WorkshopCard/> */}
    </div>
  )
}

export default Profile
