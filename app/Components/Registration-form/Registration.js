import React from 'react'
import 'tailwindcss/tailwind.css';
import './style.css';

const Registration = () => {
    return (
        <div className='flex  items-center justify-center bg-transparent'>
            <form  className=' form-box shadow-zinc-50 shadow-2xl background-image mt-14 box-border h-full w-6/12 p-4 border-4 rounded-3xl flex content-center flex-col bg-gray-700 md:box-content'  >
                <div className=' text-center text-white mb-5'>Registration<br/> Form</div>
                <div class=" ml-6 mb-5 mr-6">
                    <label for="name" className=" text-white block mb-2 text-sm font-medium  dark:text-white">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class=" ml-6  mb-5 mr-6">
                    <label for="email" className=" text-white block mb-2 text-sm font-medium  dark:text-white">Email Address</label>
                    <input type="text" id="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div><div class=" ml-6 mb-5mr-6 ">
                    <label for="password" className="text-white block mb-2 text-sm font-medium  dark:text-white">Team Name</label>
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div><div class=" ml-6 mb-5 mr-6">
                    <label for="password" className="text-white block mb-2 text-sm font-medium  dark:text-white">Phone No.</label>
                    <input type="text" id="password" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class=" ml-6 mb-5mr-6 ">
                    <label for="password" className="text-white block mb-2 text-sm font-medium  dark:text-white">College Name</label>
                    <input type="text" id="password" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register Now</button>
            </form>
        </div>
    )
}
export default Registration