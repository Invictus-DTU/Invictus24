"use client";
import React, { useState, useEffect } from "react";
import Butt from "../Components/Buttons/eventButton";
import WorkshopCard from "./WorkshopCard";
import { getEvents } from "../helper/index";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";
import { submitTeam } from "../helper";
import { useRouter } from "next/navigation";
import { checkUser } from "../helper/index";

const Workshop = () => {
  const itemsPerPage = 4;
  const [event, setEvent] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    async function get() {
      try {
        const arr = await getEvents();
        setEvent(arr.filter((val)=>{
          return (val.type==='workshop');
        }));
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    }
    get();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = event.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  const handleTeamSubmit = async (props) => {
    try {
      const res = await submitTeam(props);
      console.log(res);
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        setEvent(
          event.map((val) => {
            if (val.teamId === props.teamId) {
              val.teamStatus = "submitted";
            }
            return val;
          })
        );
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("some error occured");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full Workshop pb-[60px]">
        <h1 className="font-retrog xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-5xl flex justify-center mt-32 mb-6 text-white">
          Workshop
        </h1>

        {/* Filter and SearchBar */}
        <div className="flex h-fit sm:justify-between max-[640px]: justify-center w-[90%] max-[640px]: flex-wrap ">
          <div className="flex h-fit sm:w-fit max-[640px]: w-[80%] max-[480px]:w-fit sm:justify-normal max-[640px]: justify-between">
            <Butt title="Filter" />
            <Butt title="Sort" />
          </div>
          {/* Search Bar */}
          <div className="md: h-10 sm:h-full lg:w-100 md:w-80 sm:w-60 flex items-center bg-white m-0 max-[640px]:mt-4 p-2 rounded-full">
            <div className="h-8 w-8">
              <img src="/Search.png" alt="search" className="w-8 h-8" />
            </div>
            <input
              className="flex shrink h-[80%] w-[85%] font-retrog border-0 focus:outline-none self-center p-0 m-0"
              placeholder="Search for Events"
            ></input>
          </div>
        </div>

        {currentItems &&
          currentItems.map((item, i) => {
            return (
              <WorkshopCard
                data={item}
                key={i}
                handleTeamSubmit={handleTeamSubmit}
              />
            );
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

export default Workshop;
