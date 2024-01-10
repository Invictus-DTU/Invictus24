"use client";
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sponsors from "../../Sponsors/page";
import { signIn, useSession } from "next-auth/react";
import Profile from "../../Profile/page";
import SignIn from "../Buttons/signinButton";

const Navbar = ({ status }) => {
  const [nav, setNav] = useState(false);

  const {data : session} = useSession();


  // const fetchData = async () => {
  //   console.log("jfjpa");
  //   try {
  //     if (!session || !session.user) {
  //       console.error("No session or user found after sign-in");
  //       return;
  //     }

  //     const res = await checkUser(session?.user?.email);
  //     console.log(res);

  //     if (res?.error || res?.message === "Doesn't exist") {
  //       window.location.href = "/Registration";
  //     } else if (res?.isAdmin) {
  //       window.location.href = "admin?status=admin";
  //     }
  //     else{
  //       window.location.href = "/";
  //       console.log("fuahho");
  //     }
  //   } catch (error) {
  //     console.error("Error during data fetching:", error);
  //     // Handle errors as needed
  //   }
  // };

  async function sign() {
    try {
      await signIn("google");
      // console.log("signed in", session)
      // if(session && session.user) await fetchData();
      // else{
      //   console.log("no session");
      // }
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
    }
  }

  // useEffect(() => {
  //   console.log("jfjpa");
  //   // if (!session || !session.user) {
  //   //   console.error("No session or user found after sign-in");
  //   //   return;
  //   // }

  //   // if(clicked){
  //   //   fetchData();
  //   //   setClicked(false);
  //   // }
  // }, [ ]);

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
        <div className="absolute right-0 mx-4">
          <ul className="flex flex-row font-hammer xl:text-xl lg:text-xl max-lg:hidden text-white">
            {status === "admin" ? (
              <>
                <li className="mx-6 mt-8 hover:text-white active:text-white focus:text-white">
                  <Link href="/admin?status=admin">Registration</Link>
                </li>
                <li className="mx-6 mt-8 hover:text-white active:text-white">
                  <Link href="/admin/registeredEvents?status=admin">
                    Registered Events
                  </Link>
                </li>
                <li className="mx-6 mt-8 hover:text-white active:text-white">
                  <Link href="/admin/registeredUsers?status=admin">
                    Registered Users
                  </Link>
                </li>
                <li className="mx-6 mt-6 hover:text-white active:text-white">
                  <Link href="/Profile?status=admin" children={<Profile />}>
                    <img
                      src="/profile.png"
                      alt="profile"
                      className="h-10 w-10"
                    />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="mx-6 mt-8 hover:text-white active:text-white focus:text-white">
                  <Link href="/">HOME</Link>
                </li>
                <li className="mx-6 mt-8 hover:text-white active:text-white">
                  <Link href="/Events">EVENTS</Link>
                </li>
                <li className="mx-6 mt-8 hover:text-white active:text-white">
                  <Link href="/Workshops">WORKSHOPS</Link>
                </li>
                <li className="mx-6 mt-8 hover:text-white active:text-white">
                  <Link href="/Sponsors" children={<Sponsors />}>
                    SPONSORS
                  </Link>
                </li>
                <li className="mx-6 mt-8 hover:text-white active:text-white">
                  <Link href="/OurTeam">OUR TEAM</Link>
                </li>
                {session ? (
                  <li className="mx-6 mt-6 hover:text-white active:text-white">
                    <Link href="/Profile" children={<Profile />}>
                      <img
                        src="/profile.png"
                        alt="profile"
                        className="h-10 w-10"
                      />
                    </Link>
                  </li>
                ) : (
                  <li className="mx-6 mt-8 hover:text-white active:text-white">
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
        <ul className="flex flex-col justify-center items-center absolute top-[90px] left-0 w-full h-[400px] bg-black/[0.8]  text-white text-xl font-hammer backdrop-blur-md">
          {status === "admin" ? (
            <>
              <li className="mx-6 mt-8 hover:text-white active:text-white focus:text-white">
                <Link href="/admin?status=admin">Registration</Link>
              </li>
              <li className="mx-6 mt-8 hover:text-white active:text-white">
                <Link href="/admin/registeredEvents?status=admin">
                  Registered Events
                </Link>
              </li>
              <li className="mx-6 mt-8 hover:text-white active:text-white">
                <Link href="/admin/registeredUsers?status=admin">
                  Registered Users
                </Link>
              </li>
              <li className="mx-6 mt-6 hover:text-white active:text-white">
                <Link href="/Profile?status=admin" children={<Profile />}>
                  <img
                    src="/profile.png"
                    alt="profile"
                    className="h-10 w-10"
                  />
                </Link>
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
                      src="/profile.png"
                      alt="profile"
                      className="h-10 w-10"
                    />
                  </Link>
                </li>
              ) : (
                <li className="mx-6 mt-8 hover:text-white active:text-white">
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
