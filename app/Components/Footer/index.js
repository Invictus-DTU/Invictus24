import React from 'react';
import './style.css';
import 'tailwindcss/tailwind.css';

const Footer = () => {
    return (
        <div className='footer flex flex-row items-center justify-center bg-black/[0.25] py-4'>
            <div className="max-[815px]:hidden">
                <img src="/invictuslogo.png" alt="invictus logo"  className='w-48 h-32 mr-10'/>
            </div>
            <div className="max-[815px]:hidden">
            <p className='text-5xl mx-10'>| </p>
            </div>
            <div className='flex flex-row max-sm:flex-col'>
                
            <div className="">
            <p className='text-xl font-retrog mx-6 md:8 xl:text-xl lg:text-lg md:text-md sm:text-sm max-[640px]:text-xs justify-center'>© Designed & Developed by ❤️ Invictus Team </p>
            </div>
            <div className="">
            <p className='text-5xl mx-10 max-[815px]:hidden mt-4'>| </p>
            </div>
            <div className='flex flex-col max-[650px]:ml-28 mx-10 max-sm:flex max-sm:justify-center'>
                <div className="flex flex-row">
                    <div className="mx-2 my-2">
                        <a href="https://www.instagram.com/invictus_dtu/" target='_blank'><img src="/Instagram.png" alt="insta" /></a>
                    </div>
                    <div className="mx-2 my-2">
                    <a href="https://www.facebook.com/InvictusDtu/" target='_blank'><img src="/Facebook.png" alt="fb" /></a>
                    </div>
                    <div className="mx-2 my-2">
                    <a href="https://www.linkedin.com/company/invictus-dtu/" target='_blank'><img src="/LinkedIn Circled.png" alt="linkedin" /></a>
                    </div>
                </div>
                <div className="font-retrog xl:text-xl ml-6 lg:text-lg md:text-md sm:text-sm">
                        <p>@invictus_dtu</p>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;
