'use client'
import { useState } from 'react';
import axios from 'axios';
import TeamCard from '../components/teamCard';
import { Toaster, toast } from 'react-hot-toast';
import { RingLoader } from 'react-spinners';

const EventTeamsPage = () => {
  const [eventName, setEventName] = useState('');
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEventSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/society-events/registered-users', { eventName });
      setTeams(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching teams:', error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleEventSubmit} className="mb-4 flex flex-col">
        <div className='items-center justify-center'>
          <input
            type="text"
            placeholder="Enter Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="border rounded-md p-2 mr-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Get Teams
          </button>
        </div>
      </form>
      <div className="min-h-screen">
        <Toaster position="top-center" reverseOrder={false} />
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
          <RingLoader color={'#FFFFFF'} size={150} loading={loading} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team) => (
              <TeamCard key={team._id} team={team} className="bg-white rounded-lg shadow-md p-4" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTeamsPage;
