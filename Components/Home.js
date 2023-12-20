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
        <button onClick={null} className="w-fit  max-[768px]:h-[0.75vw] h-[1vw] xl:h-[2vw] flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[5vw] md:text-[3vw] lg:text-[2vw] text-white backdrop-blur hover:backdrop-blur-none" >
          Register Now
        </button>
      </div>
    </div>

    <div className='w-full h-[300vh] top-0 left-0 flex flex-col justify-center items-center bg-[#05063F] py-40 '>
      <img src='/bg2.png' className=' w-full absolute h-[300vh] top-[100vh] left-0 shrink-0 object-cover opacity-30 z-2' />
      <div className='z-1 h-[100vh] flex flex-col justify-evenly absolute top-[100vh] items-center text-white '>
        <div className='font-retrog text-[6vw] 2xl:text-[6vw]'>
          About
        </div>
        <p className='font-ticketing sm:text-[2vw] lg:text-[1.5vw] px-[10vw]'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        </p>
        <div className='flex gap-[8vw] flex-wrap'>
          <figure>
            <img src='/foot.png' className='md:h-[8vw] md:w-[8vw]' />
            <figcaption className="text-center text-[1.75vw] font-ticketing leading-[2vw]">20,000+<br/>Footfall</figcaption>
          </figure>
          <figure>
            <img src='/grad.png' className='md:h-[8vw] md:w-[8vw]'/>
            <figcaption className="text-center text-[1.75vw] font-ticketing leading-[2vw]">100+<br/>Colleges</figcaption>
          </figure>
          <figure>
            <img src='/calendar.png' className='md:h-[8vw] md:w-[8vw]'/>
            <figcaption className="text-center text-[1.75vw] font-ticketing leading-[2vw]">60+<br/>Events</figcaption>
          </figure>          
          
          
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
      About section goes here....
    </div>
    
    </main>
  )
}

export default Home