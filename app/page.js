"use client";
import React from "react";
import Home from "./Home/Home";
import Profile from "./Profile/page";
import { Loader } from "./Loader/Loader"
import Head from "next/head";
const page = () => {

  return (
    <>
      <Home />
    </>
    // <Profile />
    // <Loader/>
    // <Workshop />
    // <Registration/>
  );
};

export default page;
