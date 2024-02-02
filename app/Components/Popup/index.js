import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 1000); // Adjust the time in milliseconds (5 seconds in this example)

    return () => clearTimeout(timer);
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
            <div className="h-[200px] w-[200px] flex border-2 border-white">
                <div className=' font-retrog text-white text-center w-full p-2'>
                    INVICTUS'24
                </div>
                <div className="text-white p-2" onClick={()=>{
                    closePopup();
                }}>
                    <RxCross2 />
                </div>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default Popup