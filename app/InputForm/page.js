'use client'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { joinTeam, createTeam } from '../helper/index';
import { useSearchParams, useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import './style.css';

const TeamPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const eventName = params.get("event");
  const prev = params.get("prev");
  const [joinTeamId, setJoinTeamId] = useState('');
  const [teamName, setTeamName] = useState("");

  const handleJoinTeamSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await joinTeam(joinTeamId, prev, eventName);
      if(res.error){
        toast.error(res.error);
      }
      else {
        toast.success(res.message);
        setJoinTeamId("");
        router.push(prev);
      }
    }
    catch (error) {
      toast.error("some error occured");
    }
  };

  const handleCreateTeamSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const newTeamId = uuidv4();

      const res = await createTeam({ teamname: teamName, teamId: newTeamId, eventName: eventName });

      if (res.error) {
        toast.error(res.error);
        setTeamName("");
      }
      else {
        toast.success(res.message);
        setTeamName("");
        router.push(prev);
      }
    }
    catch (error) {
      toast.error("some error occured");
    }
  };

  return (
    <main className="w-full overflow-auto h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full h-full flex justify-center items-center bg-[#05063F]" style={{ overflow: 'hidden' }}>
        <img
          src="/bg.png"
          className=" w-full absolute h-full top-0 left-0 shrink-0 object-cover opacity-50"
        />
        <div className="z-1 flex flex-col py-24 justify-center h-full relative top-0 items-center" style={{ top: '50px' }}>
          <br></br>
          <div className='text-center text-white mb-20 font-retrog text-3xl font-bold'>Team Page</div>
          <br></br>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Form to join a team */}
            <form
              className='z-1 form-box shadow-zinc-50 shadow-2xl background-image mt-14 mb-14 box-border p-4 border-4 form-round flex content-center flex-col bg-gray-700 md:box-content'
              style={{ padding: '40px 40px', maxWidth: '400px', margin: 'auto' }}
              onSubmit={handleJoinTeamSubmit}>
              <div className='text-center text-white mb-5 font-retrog text-3xl'>Join a Team</div>
              <div className="flex items-center">
                <label htmlFor="name" className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white">Team Id</label>
                <input
                  type="text"
                  value={joinTeamId}
                  onChange={(e) => setJoinTeamId(e.target.value)}
                  style={{ marginLeft: '50px' }}
                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button className="event-button bg-transparent w-4/6 h-20 flex justify-center items-center font-retrog text-2xl  px-5 py-1 my-1 mx-auto">
                Join
              </button>
            </form>

            {/* Form to create a team */}
            <form
              className='z-1 form-box shadow-zinc-50 shadow-2xl background-image mt-14 mb-14 box-border p-4 border-4 form-round flex content-center flex-col bg-gray-700 md:box-content'
              style={{ padding: '40px 40px', maxWidth: '400px', margin: 'auto' }}
              onSubmit={handleCreateTeamSubmit}>
              <div className='text-center text-white mb-5 font-retrog text-3xl'>Create a Team</div>
              <div className="flex items-center mb-4">
                <label htmlFor="name" className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white">Team Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  style={{ marginLeft: '50px' }}
                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button className="event-button bg-transparent w-4/6 h-20 flex justify-center items-center font-retrog text-2xl  px-5 py-1 my-1 mx-auto">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamPage;