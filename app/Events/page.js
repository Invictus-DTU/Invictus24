'use client'
import React, { useState, useEffect } from "react";
import Butt from "../Components/Buttons/eventButton";
import EventCard from "./EventCard";
import { getEvents } from "../helper/index";
import { useSession } from "next-auth/react";
import { Toaster, toast } from 'react-hot-toast';
import { submitTeam } from "../helper";
import { useRouter } from "next/navigation";
import { checkUser } from "../helper/index";

const Events = () => {
  const [event, setEvent] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
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

  // useEffect(() => {
  //   if(!session || !session?.user) return;
  //   async function auth(){
  //     const res = await checkUser(session?.user?.email);
  //     if(res.error || res.message === "Doesn't exist"){
  //       await signOut();
  //       router.push('/Registeration');
  //     }
  //     else if(res.isAdmin){
  //       router.push('/admin?status=admin');
  //     }
  //   }
  //   auth();
  // }, [session]);
  const itemsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = event.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

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
      <div className="flex flex-col items-center w-full Events pb-[60px] ">
      <Toaster position="top-center" reverseOrder={false} />
        <h1 className="font-retrog xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-5xl flex justify-center mt-32 text-white">
          Events
        </h1>

        <div className="flex justify-between w-[90%]">
          <div className="flex">
            <Butt title="Filter" />
            <Butt title="Sort By" />
          </div>
          <div className="searchbar flex  bg-white m-0 p-2 rounded-full">
            <div className="h-8 w-8">
              <img src="/Search.png" alt="search" className="w-8 h-8" />
            </div>
            <input
              className="h-8 font-retrog border-0 border-none"
              placeholder="Search for Events"
            ></input>
          </div>
        </div>

        {currentItems && currentItems.map((item, i) => {
          return <EventCard data={item} key={i} handleTeamSubmit={handleTeamSubmit} />;
        })}

       {/* Pagination component with Next and Previous buttons */}
       <div className="pagination font-ticketing">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          {Array.from({ length: Math.ceil(event.length / itemsPerPage) }).map(
            (item, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(event.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Events;
