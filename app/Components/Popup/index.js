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
    <div className='h-[250px]'>
        {/* spacing */}
    </div>
        <div>
        {showPopup? (<div className="h-[200px] w-[200px] flex border-2 border-white">
            <div className=' font-retrog text-white text-center w-full p-2'>
                INVICTUS'24 {countDown}
            </div>
            <div className="text-white p-2" onClick={()=>{
                closePopup();
            }}>
                <RxCross2 />
            </div>
        </div>):<></>}
        </div>
    </>
  )
}

export default Popup