"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "./style.css";
import { userRegister } from "../helper/index";
import { signIn, signOut, useSession } from "next-auth/react";

const Registration = () => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });
  const [_, setRegistered] = useState(false);

  const validatePhoneNumber = (phoneNumber) => {
    // Regex pattern for 10 digits
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (!session) {
      alert("please verify your email");
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }
    e.preventDefault();
    try {
      const result = await userRegister({
        ...formData,
        email: session?.user?.email,
      });
      console.log(session.user.email, result.success);
      if (result.success) {
        alert(result.message);
        setRegistered(true);
        window.location.href = "/";
      } else {
        alert(result.error + " Maybe you have already used that phoneNo?");
        await signOut();
        window.location.reload();
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      window.location.reload();
    }
  };

  return (
    <main className="w-full h-full">
      <div className="w-full h-full top-0 left-0 flex flex-col bg-[#05063F] bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center">
        <div
          className="z-1 flex py-24 justify-center items-center h-full relative"
          style={{ top: "50px", overflow: "hidden", marginBottom: "0px" }}
        >
          <form
            className="z-1 form-box shadow-zinc-50 shadow-2xl background-image mt-14 mb-14 box-border h-full xl:w-[600px] md:w-6/12 sm:w-3/5 max-[640px]:w-4/5  p-4 border-4 form-round flex content-center flex-col bg-gray-700 "
            onSubmit={handleSubmit}
          >
            <div className="text-center text-white mb-5 font-retrog text-3xl">
              Registration
              <br /> Form
            </div>
            <div className="ml-6 mb-5 mr-6">
              <label
                htmlFor="name"
                className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            {session ? (
              <p className="text-black w-11/12 py-2 my-2 mx-auto bg-green-200/70 text-center rounded-lg">
                Verified Email!
              </p>
            ) : (
              <div className="ml-6 mb-5 mr-6">
                <button
                  onClick={async () => {
                    await signIn("google");
                  }}
                  className="text-white py-2 w-full bg-black/70 rounded-lg"
                >
                  Verify Email via Google
                </button>
              </div>
            )}
            <div className="ml-6 mb-5 mr-6">
              <label
                htmlFor="phoneNo"
                className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white"
              >
                Phone No.
              </label>
              <input
                type="text"
                id="phoneNo"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="ml-6 mb-5 mr-6">
              <label
                htmlFor="collegeName"
                className="text-lg font-retrog text-white block mb-2 font-medium dark:text-white"
              >
                College Name
              </label>
              <input
                type="text"
                id="collegeName"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button className="event-button transition-all duration-200 sm:h-20 max-sm:h-16 flex justify-center items-center font-ticketing w-1/2 min-w-fit text-3xl  px-5 py-1 my-1 mx-auto">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Registration;
