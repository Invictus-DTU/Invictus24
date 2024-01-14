import React from "react";

export default function TeamCard({ property }) {
  return (
    <div className="event flex w-full mx-8 mb-10">
      <img src="/arrow.png" className="mr-5 w-10 h-10 sm:block max-sm:hidden" />
      <div className="flex flex-wrap">
        <div className=" flex flex-col min-[400px]:text-3xl max-[400px]:text-2xl">
          <div>
            {property.eventName?.type} Name: {property.eventName?.name}
          </div>
          <div>Team Name: {property.teamname}</div>
          <div>Team Id: {property.teamId}</div>
          <div>Team status: {property.status}</div>
        </div>
        <div className="names flex flex-col text-3xl">
          {property.member.map((val, index) => {
            if (val._id === property.teamLeader._id) {
              return <div key={index}>{val.username} (Leader)</div>;
            }
            return <div key={index}>{val.username} member</div>;
          })}
        </div>
      </div>
    </div>
  );
}
