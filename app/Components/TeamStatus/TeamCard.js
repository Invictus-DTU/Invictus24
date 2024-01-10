import React from 'react'

export default function TeamCard({property}) {
  return (
    <div className='event flex w-100'>
            
        <img src="/arrow.png" className='mr-5' />
        <div className='title flex flex-col'>
            <div>{property.eventName?.type} Name: {property.eventName?.name}</div>
            <div>Team Name: {property.teamname}</div>
            <div>Team Id: {property.teamId}</div>
            <div>Team status: {property.status}</div>
        </div>
        <div className='names flex flex-col'>
            {property.member.map((val, index)=>{
                if(val._id===property.teamLeader._id){
                    return (<div key = {index}>{val.username} (Leader)</div>)
                }
            return (<div key = {index}>{val.username} member</div>)})}
        </div>
    </div>
  )
}
