'use client'
import React,{useEffect, useState} from 'react'
import "./InputForm.css";
import EventButton from '../Components/Buttons/eventButton';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';


const InputForm = ({user}) => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    college: '',
    phone: 0,
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(()=>{
    setFormData({
      username: user?.username || '',
      email: user?.email || '',
      college: user?.college || '',
      phone: user?.phone || 0,
    })
  },[user]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const {username,email,college,phone}=formData;
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/updateUser`,{_id: user._id,username,email,college,phone});
      setFormData({username,email,college,phone});
      toast.success('User updated successfully.');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error(error.response.data.error);
    }
  };

  

  return (
    <div className='InputForm' w-100>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 id='ourProfile' className='w-100'>Our Profile</h1>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          readOnly= "true"
        />
        <label for="phone">Phone No.</label>
        <input
          type="Number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label for="college">College Name</label>
        <input
          type="text"
          id="college"
          name="college"
          value={formData.college}
          onChange={handleChange}
        />
        <div className='flex justify-center items-center m-auto w-[50%]'>
            <EventButton action={handleSubmit} title="Save Info"/>
        </div>
      </form>
      
    </div>
  )
}

export default InputForm;
