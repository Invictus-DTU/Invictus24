'use client'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { joinTeam, createTeam } from '../helper/index';
import { useSearchParams, useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';

const TeamPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const eventName = params.get("event");
  const prev = params.get("prev");
  console.log("prev",prev);
  const [joinTeamId, setJoinTeamId] = useState('');
  const [teamName, setTeamName] = useState("");

  const handleJoinTeamSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await joinTeam(joinTeamId, prev);
      if(res.error){
        toast.error(res.error);
      }
      else{
        toast.success(res.message);
        setJoinTeamId("");
        console.log(prev);
        router.push(prev);
      }
    }
    catch(error){
      toast.error("some error occured");
    }
  };

  const handleCreateTeamSubmit = async(e) => {
    e.preventDefault();
    console.log(teamName);
    try{
      const newTeamId = uuidv4(); 
      console.log('Creating a new team with ID:', newTeamId);
      const res = await createTeam({teamname: teamName, teamId: newTeamId, eventName: eventName});
      console.log(res);
      if(res.error){
        toast.error(res.error);
        setTeamName("");
      }
      else{
        toast.success(res.message);
        setTeamName("");
        router.push(prev);
      }
    }
    catch(error){
      toast.error("some error occured");
    }    
  };

  return (
    <div className="container mx-auto my-10">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold mb-4">Team Page</h1>

      {/* Form to join a team */}
      <form onSubmit={handleJoinTeamSubmit} className="mb-8">
        <h2 className="text-xl font-bold mb-2">Join a Team</h2>
        <div className="flex items-center">
          <label className="mr-2">Team ID:</label>
          <input
            type="text"
            value={joinTeamId}
            onChange={(e) => setJoinTeamId(e.target.value)}
            className="border p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Join Team</button>
      </form>

      {/* Form to create a team */}
      <form onSubmit={handleCreateTeamSubmit}>
        <h2 className="text-xl font-bold mb-2">Create a Team</h2>
        <div className="flex items-center mb-4">
          <label className="mr-2">Team Name:</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="border p-2"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Create Team</button>
      </form>
    </div>
  );
};

export default TeamPage;