'use client'
import React, { useEffect } from "react";
import "./Background.css";
import Butt from "./Button";
import EventCard from "./EventCard";
import Image from "next/image";
import srh from "./search.png";
import { getEvents } from "../helper/index";
import { useSession } from "next-auth/react";

const Events = () => {
 
  var arr = [
    {
      title: "title",
      detail: "details",
      date: "date",
      time: "time",
      Venue: "Venue",
    },
    {
      title: "title",
      detail: "details",
      date: "date",
      time: "time",
      Venue: "Venue",
    },
    {
      title: "title",
      detail: "details",
      date: "date",
      time: "time",
      Venue: "Venue",
    },
    {
      title: "title",
      detail: "details",
      date: "date",
      time: "time",
      Venue: "Venue",
    },
    {
      title: "title",
      detail: "details",
      date: "date",
      time: "time",
      Venue: "Venue",
    },
  ];

/*
  useEffect(()=>{
    async function get(){
      arr = await getEvents();
    }
    get();
  },[])*/

  return (
    <>
      <div className="justify-center Events">
        <h1 className="font-retrog xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-5xl flex justify-center mt-32 text-white">
          Events
        </h1>

        <div className="flex justify-between">
          <div className="flex">
            <Butt title="Filter" />
            <Butt title="Sort By" />
          </div>
          <div className="searchbar flex  bg-white m-0 p-2 rounded-full">
            <div className="w-8 h-8">
              <Image src={srh} className="w-8 h-8" />
            </div>
            <input
              className="h-8 font-retrog border-0 border-none"
              placeholder="Search for Events"
            ></input>
          </div>
        </div>

        {arr && arr.map((item, i) => {
          return <EventCard props={item} key={i} />;
        })}
      </div>
    </>
  );
};

export default Events;
