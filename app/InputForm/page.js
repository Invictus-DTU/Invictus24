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
  console.log("prev", prev);
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
        console.log(prev);
        router.push(prev);
      }
    }
    catch (error) {
      toast.error("some error occured");
    }
  };

  const handleCreateTeamSubmit = async (e) => {
    e.preventDefault();
    console.log(teamName);
    try {
      const newTeamId = uuidv4();
      console.log('Creating a new team with ID:', newTeamId);
      const res = await createTeam({ teamname: teamName, teamId: newTeamId, eventName: eventName });
      console.log(res);
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
    <main className="w-full  overflow-auto">
      <div className="w-full h-screen top-0 left-0 flex justify-center items-center bg-[#05063F]" style={{overflow:'hidden'}}>
        <img
          src="/bg.png"
          className=" w-full absolute h-full top-0 left-0 shrink-0 object-cover opacity-50 z-2"
        />
        <div className="z-1 flex flex-col py-24 justify-center h-screen relative top-0 items-center" style={{ top: '50px' }}>

          <br></br>
          <div className='text-center text-white mb-5 font-retrog text-3xl font-bold'>Team Page</div>
          <br></br>
          <div className='flex gap-[8vw]'>
            {/* Form to join a team */}
            <form
              className='z-1 form-box shadow-zinc-50 shadow-2xl background-image mt-14 mb-14 box-border p-4 border-4 form-round flex content-center flex-col bg-gray-700 md:box-content'
              style={{ padding: '40px 40px', height: '200px', width: '400px' }}
              onSubmit={handleJoinTeamSubmit}>
              <div className='text-center text-white mb-5 font-retrog text-3xl'>Join a Team</div>        <div className="flex items-center">
                <label htmlFor="name" className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white">Name</label>
                <input
                  type="text"
                  value={joinTeamId}
                  onChange={(e) => setJoinTeamId(e.target.value)}
                  style={{ marginLeft: '50px' }}
                  className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button>
                <div className='flex flex-col items-center relative register-box' style={{ top: '-40px' }}>
                  <div className='  h-6 bg-white box-1'></div>
                  <div className=' w-4/6 h-12 bg-white relative box-2 text-center text-2xl  font-retrog pt-2'>Join</div>
                  <div className=' w-3/5 h-20 bg-white text-black box-3' ></div>
                </div>
              </button>
            </form>

            {/* Form to create a team */}
            <form
              className='z-1 form-box shadow-zinc-50 shadow-2xl background-image mt-14 mb-14 box-border p-4 border-4 form-round flex content-center flex-col bg-gray-700 md:box-content'
               onSubmit={handleCreateTeamSubmit}
               style={{ padding: '40px 40px', height: '200px', width: '400px' }}
              >
                
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
              <button>
                <div className='flex flex-col items-center relative register-box' style={{ top: '-70px' }}>
                  <div className='  h-6 bg-white box-1'></div>
                  <div className=' w-4/6 h-12 bg-white relative box-2 text-center text-2xl  font-retrog pt-2'>Create</div>
                  <div className=' w-3/5 h-20 bg-white text-black box-3' ></div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamPage;