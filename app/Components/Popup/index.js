'use client'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [countDown, setCountDown] = useState('');
  const [days, setdays] = useState('');
  const [hrs, sethrs] = useState('');
  const [min, setmin] = useState('');
  const [sec, setsec] = useState('');
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    const endTime = new Date('2024-02-09T17:30:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifferenceInMillis = endTime - now;
      setTimer(timeDifferenceInMillis)

      if (timeDifferenceInMillis <= 0) {
        setTimer(timeDifferenceInMillis);
        setCountDown(`Invictus'24 is live`);
      } else {
        const days = Math.floor(timeDifferenceInMillis / (24 * 1000 * 60 * 60));
        const hours = Math.floor(timeDifferenceInMillis % (24 * 1000 * 60 * 60) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifferenceInMillis % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifferenceInMillis % (1000 * 60)) / 1000);
        setdays(days);
        sethrs(hours);
        setmin(minutes);
        setsec(seconds);
        setCountDown(`${days} days ${hours} hrs ${minutes} min ${seconds} sec`);
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
      {showPopup ? (
        <div className='w-full h-screen flex justify-center items-center top-0 left-0 bg-[rgba(0,0,0,0.5)] fixed z-[99999]'>
          <div className=' h-[50vh] w-11/12 sm:w-9/12 md:w-6/12 lg:w-4/12 flex text-center flex-col border-2 border-white m-auto rounded-3xl  shadow-[0px_0px_20px_#8f8f8f8f] Popup'>
            <div className="flex flex-col h-2/6 justify-center items-center w-full text-center ">
              <div className=" cursor-pointer text-white px-2 text-3xl flex flex-col items-end w-full h-fit " onClick={() => {
                closePopup();
              }}>
                <RxCross2 />
              </div>
              <div className=' font-retrog text-white text-center w-full p-2 text-4xl xl:text-5xl font-extrabold max-sm:text-2xl'>
                INVICTUS'24
              </div>
            </div>
            <div className='text-white w-full flex justify-center items-center h-5/6 text-6xl font-ticketing font-extrabold max-sm:text-3xl'>

              {timer <= 0 ?
                <>
                  {countDown}

                </>
                : <div className='sm:text-5xl'>

                  {/* <span className='text-green-400'> {days}</span> : <span className='text-green-400'>{hrs} </span>: <span className='text-green-400'>{min}</span> : <span className='text-orange-400'>{sec} </span> */}
                  <span className='text-green-400'> {days}</span>D:<span className='text-green-400'>{hrs}</span>H:<span className='text-green-400'>{min}</span>M:<span className='text-orange-400'>{sec}</span>S<br/>
                  <br/>
                  <div className='max-sm:text-xl sm:text-4xl'>
                  REMAINING
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      ) : <></>}
    </>
  )
}

export default Popup
