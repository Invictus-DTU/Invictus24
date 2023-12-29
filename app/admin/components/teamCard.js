import React from 'react';

const TeamCard = ({ team}) => {
  const {
    teamname,
    teamId,
    teamLeader,
    member,
  } = team;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h2 className="text-xl font-semibold">{teamname}</h2>
      <p>Team ID: {teamId}</p>
      <p>Leader ID: {teamLeader.username} {teamLeader.email}</p>
      <p>Members:</p>
      <ul>
        {member.map((memberId) => {
        //   const user = users.find((user) => user._id === memberId);
          const user = memberId ;
          return (
            <li key={memberId._id}>
              {user ? `${user.username} (${user.email})` : 'User Not Found'}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamCard;
