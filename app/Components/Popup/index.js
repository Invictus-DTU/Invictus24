'use client'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [countDown, setCountDown] = useState('');

  useEffect(() => {
    const endTime = new Date('2024-02-09T17:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifferenceInMillis = endTime - now;

      if (timeDifferenceInMillis <= 0) {
        clearInterval(timer);
        setCountDown(`Invictus'24 is live`);
      } else {
        const days = Math.floor(timeDifferenceInMillis / (24 * 1000 * 60 * 60));
        const hours = Math.floor(timeDifferenceInMillis % (24 * 1000 * 60 * 60)/ (1000 * 60 * 60));
        const minutes = Math.floor((timeDifferenceInMillis % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifferenceInMillis % (1000 * 60)) / 1000);
        setCountDown(`${days}:${hours}:${minutes}:${seconds}`);
      }
    };

    // Initial update
    updateCountdown();

    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    {showPopup? (
    <div className='w-full h-screen flex justify-center items-center absolute top-0 left-0 z-30 bg-[rgba(0,0,0,0.5)]'>
        <div className=' h-[50vh] w-11/12 sm:w-9/12 md:w-6/12 lg:w-4/12 flex flex-col border-2 border-white m-auto rounded-3xl  shadow-[0px_0px_20px_#8f8f8f8f] Popup'>
            <div className="flex flex-col h-2/6 justify-center items-center w-full ">
                <div className="text-white px-2 text-3xl flex flex-col items-end w-full h-fit " onClick={()=>{
                    closePopup();
                }}>
                    <RxCross2 />
                </div>
                <div className=' font-retrog text-white text-center w-full p-2 text-4xl xl:text-5xl font-extrabold'>
                    INVICTUS'24
                </div>  
            </div>
            <div className='text-white w-full flex justify-center items-center h-5/6 text-6xl font-ticketing font-extrabold'>
                {countDown}
            </div>
        </div> 
    </div>
    ):<></>}
    </>
  )
}

export default Popup
