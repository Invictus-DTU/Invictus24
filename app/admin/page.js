'use client'
import axios from 'axios';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Base64 from '../Components/Base64';

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    societyName: '',
    description: '',
    date: '',
    teamSizeMIN: 1,
    teamSizeMax: 1,
    prize: 0,
    venue: '',
    registrationEndDate: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/society-events/registration', formData)
      .then((response) => {
        toast.success('Event registered successfully');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error sending data:', error.response.data.error,error.response.status);
        toast.error(error.response.data.error);
      });
    console.log(formData);
  };

  async function handleFileUpload(e) {
      let file;
      if(e.target.files){
          file= e.target.files[0];
      }
          const base64= await Base64(file);
      if(e.target.files && e.target.files[0]){
          setFormData({...formData, image: base64});
      }
  }

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-black">
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
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

        <label htmlFor="profileImage" className="block mb-4">
          Profile Image
        <input
          id="profileImage"
          name="profileImage"
          type="file"
          accept="image/jpg image/jpeg"
          onChange={handleFileUpload}
          className="mt-1 p-2 w-full rounded-md border border-gray-300 bg-white text-gray-900"
          required
        />
          </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
    
  );
};

export default EventForm;
