import React from 'react'

const Home = () => {
  return (
    <main className='w-screen absolute h-screen overflow-auto'>
    <div className='w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-[#05063F]'>
      <img src='/bg.png' className=' w-full absolute h-full top-0 left-0 shrink-0 object-cover opacity-50 z-2' />
      <div className='z-1 flex flex-col justify-center absolute items-center gap-16 '>
        <div className="w-fit flex flex-col gap-0">  
          <div className='font-retrog text-white text-[4vw] 2xl:text-[2vw]'>
            10th Feb ‘24
          </div>
          <div className='font-karma text-[12vw] 2xl:text-[10vw] text-white tracking-wide mx-1 text-center'>
            INVICTUS
          </div>
          <div className='font-retrog text-white text-[4vw] 2xl:text-[2vw] text-right'>
            Life in a Pixelated Era
          </div>
        </div>
        <button onClick={null} className='w-1/3 h-full font-ticketing text-[2vw] text-white border-solid border-white border-4 backdrop-blur hover:bg-white hover:text-black ' >
          Register Now
        </button>
      </div>
    </div>

    <div>
      About section goes here....
    </div>
    
    </main>
  )
}

export default Home