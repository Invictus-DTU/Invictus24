'use client'
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import './style.css';
import { userRegister } from '../helper';
import {signIn, signOut, useSession} from 'next-auth/react';

const Registration = () => {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
    });
    const [registered, setRegistered] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        if(!session){
           alert("please verify your email");
           return;
        }
        e.preventDefault();
        try {
            const result = await userRegister({...formData, email: session?.user?.email});
    
            if (result.success) {
                alert(result.message);
                setRegistered(true);
                window.location.href = "/";
            } else {
                alert(result.error);
                await signOut();
                window.location.reload();
            }
        } catch (err) {
            console.error("Error in handleSubmit:", err);
            window.location.reload();
        }
    };

    return (
        <div className='flex items-center justify-center bg-transparent'>
            <form
                className='form-box shadow-zinc-50 shadow-2xl background-image mt-14 mb-14 box-border h-full w-6/12 p-4 border-4 form-round flex content-center flex-col bg-gray-700 md:box-content'
                onSubmit={handleSubmit}
            >
                <div className='text-center text-white mb-5 font-retrog text-3xl'>Registration<br /> Form</div>
                <div className="ml-6 mb-5 mr-6">
                    <label htmlFor="name" className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                {session? <p className='text-green-400'>verified</p> : <div className="ml-6 mb-5 mr-6">
                <button onClick={async()=>{
                    await signIn("google");
                }} className='text-white'>
                    verify email
                </button>
                </div>}
                <div className="ml-6 mb-5 mr-6">
                    <label htmlFor="phoneNo" className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white">Phone No.</label>
                    <input
                        type="text"
                        id="phoneNo"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="ml-6 mb-5 mr-6">
                    <label htmlFor="collegeName" className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white">College Name</label>
                    <input
                        type="text"
                        id="collegeName"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <button>
                    <div className='flex flex-col items-center relative register-box'>
                        <div className='  h-6 bg-white  relative box-1'></div>
                        <div className=' w-4/6 h-12 bg-white relative box-2 text-center text-2xl  font-retrog pt-2'>Register Now</div>
                        <div className=' w-3/5 h-20 bg-white text-black box-3' ></div>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default Registration;
