'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../components/eventCard';
import { Toaster, toast } from 'react-hot-toast';
import { RingLoader } from 'react-spinners';
const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch events from the backend using Axios
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/society-events/registered-events');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        toast.error(error.response.data.error);
      }
    };

    fetchEvents();
  }, []);

 

  return (
    <div className="min-h-screen">
    <Toaster position="top-center" reverseOrder={false} />
    {loading ? (
      <div className="flex justify-center items-center min-h-screen">
      <RingLoader color={'#FFFFFF'} size={150} loading={loading} />
      </div>
    ) : (
      <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
      </div>
    )}
  </div>
  );
};

export default EventsPage;
