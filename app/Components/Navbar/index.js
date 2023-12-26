'use client'
import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sponsors from '../../Sponsors/page';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <nav className='xl:h-[100px] lg:h-[95px] md:h-[90px] sm:h-[80px] max-[640px]:h-[80px] bg-black/[0.25] flex justify-center backdrop-blur-md sticky top-0 z-50'>
            <div className='flex flex-row'>
                <div className='absolute left-0  mt-2 mx-10 max-md:mx-4'>
                <Link href="/">
                            <img src="/invictuslogo.png" alt="invictus logo" className='xl:h-20 lg:h-20 md:h-20 sm:h-16 xl:w-32 lg:w-32 md:w-32 sm:w-28 max-[640px]:h-16 max-[640px]:w-28'/>
                </Link>
                </div>
                <div className='absolute right-0 mx-4'>
                    <ul className='flex flex-row font-hammer xl:text-xl lg:text-xl max-lg:hidden text-white'>
                        <li className='mx-6 mt-8 hover:text-white active:text-white focus:text-white'>
                            <Link href="/">
                                HOME
                            </Link>
                        </li>
                        <li className='mx-6 mt-8 hover:text-white active:text-white'>
                            <Link href="/events">
                                EVENTS
                            </Link>
                        </li>
                        <li className='mx-6 mt-8 hover:text-white active:text-white'>
                            <Link href="/workshops">
                                WORKSHOPS
                            </Link>
                        </li>
                        <li className='mx-6 mt-8 hover:text-white active:text-white'>
                            <Link href="/Sponsors" children={<Sponsors/>}>
                                SPONSORS
                            </Link>
                        </li>
                        <li className='mx-6 mt-8 hover:text-white active:text-white'>
                            <Link href="/ourteam">
                                OUR TEAM
                            </Link>
                        </li>
                        <li className='mx-6 mt-6 hover:text-white active:text-white'>
                            <Link href="/profile">
                                <img src="/profile.png" alt="profile" className='h-10 w-10'/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='hamburger lg:hidden h-8 w-8 mt-6 absolute right-4' onClick={() => setNav(!nav)}>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}</div>
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-[90px] left-0 w-full h-[400px] bg-black/[0.8]  text-white text-xl font-hammer backdrop-blur-md">
                
                <li className='mx-6 mt-8 hover:text-white active:text-white focus:text-white'>
                            <Link href="/">
                                HOME
                            </Link>
                        </li>
                        <li className='mx-6 mt-8 hover:bg-white/[0.5] active:text-white'>
                            <Link href="/events">
                                EVENTS
                            </Link>
                        </li>
                        <li className='mx-6 mt-8 hover:text-white active:text-white'>
                            <Link href="/workshops">
                                WORKSHOPS
                            </Link>
                        </li>
                        <li className='mx-6 mt-8 hover:text-white active:text-white'>
                            <Link href="/Sponsors">
                                SPONSORS
                            </Link>
                        </li>
                        <li className='mx-6 mt-8 hover:text-white active:text-white'>
                            <Link href="/ourteam">
                                OUR TEAM
                            </Link>
                        </li>
                        <li className='mx-6 mt-6 hover:text-white active:text-white'>
                            <Link href="/profile">
                                <img src="/profile.png" alt="profile" className='h-10 w-10'/>
                            </Link>
                        </li>
                
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
