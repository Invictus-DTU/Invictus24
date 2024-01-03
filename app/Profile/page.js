'use client'
import React,{useEffect, useState} from 'react'
import { TeamStatus } from '../Components/TeamStatus/TeamStatus'
import InputForm from "../InputForm/page"
import axios from 'axios';

const Profile = () => {
  const [user,setuser] = useState({
    _id: '',
    username: '',
    email: '',
    college: '',
    phone: 0,
  });
  const [team,setTeam] = useState([]);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getUser');
        const teams = await axios.get('http://localhost:3000/api/getUserTeams');
        console.log(teams);
        setTeam(teams.data.team);
        setuser({
          _id: response.data._id,
          username: response.data.username,
          email: response.data.email,
          college: response.data.college,
          phone: response.data.phone,
        });
        console.log(response.data); 
        console.log(user); 
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className='h-[300vh] bg-[#05063f]'>
        <img src='/bg2.png' className=' w-full absolute h-[300vh] top-0 left-0 shrink-0 object-cover opacity-30 z-2  ' />
        <div className='h-[100px]'></div>
        <div className='w-full h-[300vh] absolute z-1'>
          <InputForm user={user}/>
          <TeamStatus teams={team}/>
        </div>
        {/* <WorkshopCard/> */}
    </div>
  )
}

export default Profile
