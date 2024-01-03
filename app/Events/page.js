'use client'
import React, { useState, useEffect } from "react";
import Butt from "./Button";
import EventCard from "./EventCard";
import Image from "next/image";
import srh from "./search.png";
import { getEvents } from "../helper/index";
import { useSession } from "next-auth/react";
import { Toaster, toast } from 'react-hot-toast';

import { submitTeam } from "../helper";


const Events = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    async function get() {
      try {
        const arr = await getEvents();
        setEvent(arr);
      } catch (error) {
        console.error('Error fetching events:', error.message);
      }
    }
    get();
  }, []);
  const handleTeamSubmit = async(props) => {
    try{
      const res = await submitTeam(props);
      console.log(res);
      if(res.error){
        toast.error(res.error);
      }
      else{
        toast.success(res.message);
        setEvent(event.map((val)=>{
          if(val.teamId === props.teamId){
            val.teamStatus = "submitted"
          }
          return val;
        }))
        return;
      }
    }
    catch(error){
      console.log(error)
      toast.error("some error occured");
    }    
  };
  return (
    <>
      <div className="justify-center Events">
      <Toaster position="top-center" reverseOrder={false} />
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
              <Image src={srh} alt="search" className="w-8 h-8" />
            </div>
            <input
              className="h-8 font-retrog border-0 border-none"
              placeholder="Search for Events"
            ></input>
          </div>
        </div>

        {event && event.map((item, i) => {
          return <EventCard data={item} key={i} handleTeamSubmit={handleTeamSubmit} />;
        })}
      </div>
    </>
  );
};

export default Events;
