'use client'
import axios from 'axios';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    societyName: '',
    location: '',
    description: '',
    date: '',
    time: '',
    teamSizeMIN: 1,
    teamSizeMax: 1,
    prize: 0,
    venue: '',
    registrationEndDate: '',
    image: '',
    type: '',
    readmore:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const imageUpload = (e) =>{
    const { name, value } = e.target;
    const id = value.match(/\/d\/([^\/]+)\/view/);
    const url = id?"https://lh3.googleusercontent.com/d/" + id[1] :"";
    setFormData({
      ...formData,
      image: url
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/society-events/registration`, formData)
      .then((response) => {
        toast.success('Event registered successfully');
        setFormData({
          name: '',
          societyName: '',
          location: '',
          description: '',
          date: '',
          unstop: '',
          teamSizeMIN: 1,
          teamSizeMax: 1,
          prize: 0,
          venue: '',
          registrationEndDate: '',
          image: '',
          type: '',
          readmore:''
        })
      })
      .catch((error) => {
        console.error('Error sending data:', error.response.data.error,error.response.status);
        toast.error(error.response.data.error);
      });
  };

  return (
    /*
    <div className="flex justify-center items-center min-h-screen bg-slate-500">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className="max-w-lg w-full bg-white p-6 rounded-md shadow-md mt-[7rem]">
        <label className="block mb-4">
          Event Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          Society Name:
          <input
            type="text"
            name="societyName"
            value={formData.societyName}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          Google Map Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          Unstop Registeration Link:
          <input
            type="text"
            name="unstop"
            value={formData.unstop}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          Team Size MIN:
          <input
            type="number"
            name="teamSizeMIN"
            value={formData.teamSizeMIN}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
        Team Size Max:
          <input
            type="number"
            name="teamSizeMax"
            value={formData.teamSizeMax}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
        Prize:
          <input
            type="number"
            name="prize"
            value={formData.prize}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          Venue:
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
        Registration End Date:
          <input
            type="date"
            name="registrationEndDate"
            value={formData.registrationEndDate}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          Select Event Type:
          <div>
            <label htmlFor="event">
              <input
                type="radio"
                id="event"
                name="type"
                value="Events"
                checked={formData.type === 'Events'}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white text-gray-900"
                required
              />
              Event
            </label>
            <label htmlFor="workshop">
              <input
                type="radio"
                id="workshop"
                name="type"
                value="Workshops"
                checked={formData.type === 'Workshops'}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white text-gray-900"
                required
              />
              Workshop
            </label>
          </div>
        </label>


        <label htmlFor="profileImage" className="block mb-4">
          Image
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={imageUpload}
          className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
        />
        </label>

        <label htmlFor="profileImage" className="block mb-4">
          Read More
        <input
          type="text"
          name="readmore"
          value={formData.readmore}
          onChange={handleChange}
          className="block w-full border-gray-300 rounded-md mt-1 focus:ring-indigo-500 focus:border-indigo-500"
        />
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>*/
    <>
    <div className='w-[100%] h-auto'>
      <img src="https://imgk.timesnownews.com/story/Jai_Shri_Ram_1.jpg" className='w-[100%] mt-20'/>
      <img src="https://www.jaipurstuff.com/wp-content/uploads/2020/08/Ram-Temple-at-Ayodhya.jpg" className='w-[100%]'/>
      <img src="https://img.jagrantv.com/article/rc1048660/1704301182-ayodhya-ram-mandir-architecture.jpg" className='w-[100%]'/>
    </div>


    </>
  );
};

export default EventForm;
