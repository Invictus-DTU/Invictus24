'use client'
import React,{useState,useEffect} from 'react'
import "./TeamStatus.css"
import TeamCard from "./TeamCard";

export const TeamStatus = ({teams}) => {
    const [team,setTeam] = useState(teams);
    useEffect(()=>{
        
        setTeam(teams);
        console.log("hi:",team);
    },[teams])
  return (
    <div className="TeamStatus">
        <div className='heading'>Events Status:</div>
        {team && team.map((val, index)=>(
            <TeamCard key = {index} property={val}/>
        ))}
    </div>
  )
}
