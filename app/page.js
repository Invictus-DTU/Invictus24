"use client";
import React from "react";
import Home from "./Home/Home";
import Profile from "./Profile/page";
import { Loader } from "./Loader/Loader"
import Head from "next/head";
import Popup from "./Components/Popup"
const page = () => {

  return (
    <>
      <Home />
      {/* <Popup /> */}
    </>
    // <Profile />
    // <Loader/>
    // <Workshop />
    // <Registration/>
  );
};

export default page;
