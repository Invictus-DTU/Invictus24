"use client";
import React from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sponsors from "../../Sponsors/page";
import { signIn, signOut, useSession } from "next-auth/react";
import Profile from "../../Profile/page";
import SignIn from "../Buttons/signinButton";
import { usePathname } from "next/navigation";
import axios from 'axios';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { data: session } = useSession();
    const path = usePathname();
    const role = path.split('/')[1];

    async function sign() {
        try {
        await signIn("google");
        } catch (error) {
        console.error("An error occurred during sign-in:", error);
        }
    }

    async function deleteSession() {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`);
          const res = response.data;
          if(res.error){
            toast.error(res.error);
          }
          else{
            await signOut();
            if(!session){
              toast.success(res.message);
              window.location.href = "/";
            }
          }
        } catch (error) {
          console.error('Error during logout:', error);
        }
    }
    
    return (
        <nav className="xl:h-[100px] lg:h-[95px] md:h-[90px] sm:h-[80px] max-[640px]:h-[80px] bg-black/[0.25] w-full flex justify-center backdrop-blur-md fixed top-0 z-50">
            <div className="flex flex-row">
                <div className="absolute left-0  mt-2 mx-10 max-md:mx-4">
                    <Link href="/">
                        <img
                            src="/invictuslogo2.png"
                            alt="invictus logo"
                            className="xl:h-20 lg:h-20 md:h-20 sm:h-16 xl:w-32 lg:w-32 md:w-32 sm:w-28 max-[640px]:h-16 max-[640px]:w-28"
                        />
                    </Link>
                </div>
                <div className="absolute right-0 h-full">
                    <ul className="flex flex-row h-full items-center font-hammer xl:text-xl lg:text-xl max-lg:hidden text-white">
                        {role === "admin" ? (
                            <>
                                <li className="mx-6 hover:text-white active:text-white focus:text-white">
                                    <Link href="/admin">
                                        Registration
                                    </Link>
                                </li>
                         {/* <li className="mx-6 hover:text-white active:text-white">
                                    <Link href="/admin/registeredEvents">
                                        Registered Events
                                    </Link>
                                </li> */}
                                <li className="mx-6 hover:text-white active:text-white">
                                    <Link href="/admin/registeredUsers">
                                        Registered Users
                                    </Link>
                                </li>
                                <li className="mx-6 hover:text-white active:text-white">
                                {session ? (
                                    <SignIn
                                        buttonText="Sign Out"
                                        action={deleteSession}
                                    />
                                    ) : (
                                    <SignIn
                                        buttonText="Sign In"
                                        action={async () => {
                                            await sign();
                                        }}
                                    />
                                )}
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="mx-6 hover:text-white active:text-white focus:text-white">
                                    <Link href="/">HOME</Link>
                                </li>
                                <li className="mx-6 hover:text-white active:text-white">
                                    <Link href="/Events">EVENTS</Link>
                                </li>
                                <li className="mx-6 hover:text-white active:text-white">
                                    <Link href="/Workshops">WORKSHOPS</Link>
                                </li>
                                <li className="mx-6 hover:text-white active:text-white">
                                    <Link
                                        href="/Sponsors"
                                        children={<Sponsors />}
                                    >
                                        SPONSORS
                                    </Link>
                                </li>
                                <li className="mx-6 hover:text-white active:text-white">
                                    <Link href="/OurTeam">OUR TEAM</Link>
                                </li>
                                {session ? (
                                    <li className="mx-6 hover:text-white active:text-white">
                                        <Link
                                            href="/Profile"
                                            children={<Profile />}
                                        >
                                            <img
                                                src="/Profile.png"
                                                alt="profile"
                                                className="h-10 w-10"
                                            />
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="mx-6 hover:text-white active:text-white">
                                        <SignIn
                                            buttonText="Sign In"
                                            action={async () => {
                                                await sign();
                                            }}
                                        />
                                    </li>
                                )}
                            </>
                        )}
                    </ul>
                </div>
                <div
                    className="hamburger lg:hidden h-8 w-8 mt-6 absolute right-4 text-white"
                    onClick={() => setNav(!nav)}
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>
            {nav && (
                <ul className="flex flex-col lg:hidden justify-center items-center absolute top-[90px] left-0 w-full h-[400px] bg-black/[0.8]  text-white text-xl font-hammer backdrop-blur-md">
                    {role === "admin" ? (
                        <>
                            <li className="mx-6 mt-8 hover:text-white active:text-white focus:text-white">
                                <Link href="/admin">
                                    Registration
                                </Link>
                            </li>
                           // <li className="mx-6 mt-8 hover:text-white active:text-white">
                           //      <Link href="/admin/registeredEvents">
                           //          Registered Events
                           //      </Link>
                           //  </li> 
                            <li className="mx-6 mt-8 hover:text-white active:text-white">
                                <Link href="/admin/registeredUsers">
                                    Registered Users
                                </Link>
                            </li>
                            <li className="mx-6 mt-8 w-[90%] hover:text-white active:text-white">
                            {session ? (
                                <SignIn
                                    buttonText="Sign Out"
                                    action={deleteSession}
                                />
                                ) : (
                                <SignIn
                                    buttonText="Sign In"
                                    action={async () => {
                                        await sign();
                                    }}
                                />
                            )}
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="mx-6 mt-8 hover:text-white active:text-white focus:text-white">
                                <Link href="/">HOME</Link>
                            </li>
                            <li className="mx-6 mt-8 hover:bg-white/[0.5] active:text-white">
                                <Link href="/Events">EVENTS</Link>
                            </li>
                            <li className="mx-6 mt-8 hover:text-white active:text-white">
                                <Link href="/Workshops">WORKSHOPS</Link>
                            </li>
                            <li className="mx-6 mt-8 hover:text-white active:text-white">
                                <Link href="/Sponsors">SPONSORS</Link>
                            </li>
                            <li className="mx-6 mt-8 hover:text-white active:text-white">
                                <Link href="/OurTeam">OUR TEAM</Link>
                            </li>

                            {session ? (
                                <li className="mx-6 mt-6 hover:text-white active:text-white">
                                    <Link href="/Profile">
                                        <img
                                            src="/Profile.png"
                                            alt="profile"
                                            className="h-10 w-10"
                                        />
                                    </Link>
                                </li>
                            ) : (
                                <li className="mx-6 mt-8 w-[90%] hover:text-white active:text-white">
                                    <SignIn
                                        buttonText="Sign In"
                                        action={async () => {
                                            await sign();
                                        }}
                                    />
                                </li>
                            )}
                        </>
                    )}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
