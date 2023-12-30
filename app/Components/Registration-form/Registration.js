import React from 'react'
import 'tailwindcss/tailwind.css';
import './style.css';

const Registration = () => {
    return (
        <div className='flex  items-center justify-center bg-transparent'>
            <form className=' form-box shadow-zinc-50 shadow-2xl background-image mt-14 mb-14 box-border h-full w-6/12 p-4 border-4 form-round flex content-center flex-col bg-gray-700 md:box-content'  >
                <div className=' text-center text-white mb-5 font-retrog text-3xl'>Registration<br /> Form</div>
                <div class=" ml-6 mb-5 mr-6">
                    <label for="name" className=" text-lg font-retrog text-white block mb-2 font-medium  dark:text-white">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class=" ml-6  mb-5 mr-6">
                    <label for="email" className="text-lg font-retrog text-white block mb-2  font-medium  dark:text-white">Email Address</label>
                    <input type="text" id="email" className="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div><div class=" ml-6 mb-5 mr-6 ">
                    <label for="password" className="text-lg  font-retrog text-white block mb-2  font-medium  dark:text-white">Team Name</label>
                    <input type="text" id="password" class="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div><div class=" ml-6 mb-5 mr-6">
                    <label for="password" className="text-lg  font-retrog text-white block mb-2  font-medium  dark:text-white">Phone No.</label>
                    <input type="text" id="password" className="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class=" ml-6 mb-5 mr-6 ">
                    <label for="password" className="text-lg  font-retrog text-white block mb-2  font-medium  dark:text-white">College Name</label>
                    <input type="text" id="password" className="bg-gray-50 border border-gray-300   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
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
    )
}
export default Registration