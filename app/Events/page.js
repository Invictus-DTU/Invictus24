"use client";
import React, { useState, useEffect } from "react";
import Butt from "../Components/Buttons/eventButton";
import EventCard from "./EventCard";
import { getEvents } from "../helper/index";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";
import { submitTeam } from "../helper";
import { useRouter } from "next/navigation";
import { checkUser } from "../helper/index";

const Events = () => {
  const [event, setEvent] = useState([]);
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState({
    filter: "",
    search: "",
    sort: "",
  });
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    async function get() {
      try {
        const arr = await getEvents();
        if (arr) {
          setEvent(
            arr.filter((val) => {
              return val.type === "Events";
            })
          );
          setArr(
            arr.filter((val) => {
              return val.type === "Events";
            })
          );
        }
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    }
    get();
  }, []);

  const itemsPerPage = 4;

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      filter: "",
      search: "",
      sort: "",
      [name]: value,
    });

    if (name === "sort") {
      if (value === "date") {
        const temp = arr.slice();
        setEvent(
          temp.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
          })
        );
      } else if (value === "prize") {
        const temp = arr.slice();
        setEvent(
          temp.sort((a, b) => {
            return b.prize - a.prize;
          })
        );
      } else {
        setEvent(arr);
      }
    } else if (name === "filter") {
      if (value === "") {
        setEvent(arr);
        return;
      }
      const temp = arr.slice();
      setEvent(temp.filter((data) => data.participationStatus === value));
    } else {
      const temp = arr.slice();
      setEvent(temp.filter((event) => event.name.startsWith(value)));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full Events pb-[60px] ">
        <Toaster position="top-center" reverseOrder={false} />
        <h1 className="font-retrog xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-5xl flex justify-center mt-32 mb-6 text-white">
          Events
        </h1>

        {/* Buttons and SearchBar */}
        <div className="flex h-fit md:justify-between max-[768px]: justify-center w-[90%] max-[640px]: flex-wrap ">
          {/* Filter and Sort buttons */}
          <div className="flex h-fit md:w-fit max-[768px]: w-[80%] max-[480px]:w-fit md:justify-normal sm:justify-center max-[640px]: justify-between">
            {/* <Butt title="Filter" /> */}
            {/* <Butt title="Sort" /> */}
            <select
              name="filter"
              id="filter"
              value={filter.filter}
              onChange={handleChange}
              className="event-button bg-transparent w-fit h-fit flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[5vw] md:text-[3vw] lg:text-[2vw]  px-5 py-1 my-1 mx-2 text-center"
            >
              <option value="">Filter</option>
              <option value="participated">Registered</option>
              <option id="font-ticketing" value="not participated">
                Unregistered
              </option>
            </select>

            <select
              name="sort"
              id="sort"
              value={filter.sort}
              onChange={handleChange}
              className="event-button bg-transparent w-fit h-fit flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[5vw] md:text-[3vw] lg:text-[2vw]  px-5 py-1 my-1 mx-2"
            >
              <option value="">Sort By</option>
              <option value="date">Date</option>
              <option value="prize">Prize</option>
            </select>

            {/* <Butt title="Filter"/> */}
            {/* <Butt title="Sort" /> */}
          </div>
          {/* Search Bar */}
          <div className="md: h-10 sm:h-full lg:w-100 md:w-80 sm:w-60 flex items-center bg-white m-0 max-[768px]:mt-4 p-2 rounded-full">
            <div className="h-8 w-8">
              <img src="/Search.png" alt="search" className="w-8 h-8" />
            </div>
            <input
              className="flex shrink h-[80%] w-[85%] font-retrog border-0 focus:outline-none self-center p-0 m-0"
              placeholder="Search for Events"
              name="search"
              onChange={handleChange}
              value={filter.search}
            ></input>
          </div>
        </div>

        {currentItems &&
          currentItems.map((item, i) => {
            return (
              <EventCard
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

export default Events;
