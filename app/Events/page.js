"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { Toaster, toast } from "react-hot-toast";
import { submitTeam, getEvents } from "../helper/index";
import { Loader } from "../Loader/Loader";

import { useSearchParams } from "next/navigation";
const Events = () => {
  const [event, setEvent] = useState([]);
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState({
    filter: "",
    search: "",
    sort: "",
  });

  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("name"));

  const marr = [
    {
      name: "CAT-Talk",
      type: "speaker session",
      tag: "#speaker session",
    },
    {
      name: "BioInsght Forum",
      type: "speaker session",
      tag: "#speaker session",
    },
    {
      name: "Civil Connect 2024",
      type: "speaker session",
      tag: "#speaker session",
    },
    {
      name: "MATHLETICS",
      type: "Quiz Competions",
      tag: "#Quiz Competions",
    },
    {
      name: "Anime Decoder",
      type: "Quiz Competions",
      tag: "#Quiz Competions",
    },
    {
      name: "Automotive Odyssey Quiz",
      type: "Quiz Competions",
      tag: "#Quiz Competions",
    },
    {
      name: "LabRats Quiz 2.0",
      type: "Quiz Competions",
      tag: "#Quiz Competions",
    },
    {
      name: "CryptAI",
      type: "Quiz Competions",
      tag: "#Quiz Competions",
    },
    {
      name: "Workshop",
      type: "speaker session",
      tag: "#speaker session",
    },
    {
      name: "Paper plane Flying",
      type: "Field Events",
      tag: "#Field Events",
    },
    {
      name: "Bridge-O-Mania",
      type: "Field Events",
      tag: "#Field Events",
    },
    {
      name: "Pressure Pulse",
      type: "Field Events",
      tag: "#Field Events",
    },
    {
      name: "Aeroglide",
      type: "Field Events",
      tag: "#Field Events",
    },
    {
      name: "Launch Craft",
      type: "Field Events",
      tag: "#Field Events",
    },
    {
      name: "Seismic",
      type: "Field Events",
      tag: "#Field Events",
    },
    {
      name: "Adobe DevCraft",
      type: "Hackathon",
      tag: "#Hackathon",
    },
    {
      name: "MLcodecrunch",
      type: "Hackathon",
      tag: "#Hackathon",
    },
    {
      name: "Pitchfork",
      type: "Hackathon",
      tag: "#Hackathon",
    },
    {
      name: "Chemodelessay",
      type: "Hackathon",
      tag: "#Hackathon",
    },
    {
      name: "BioTech Venture Pitch Challenge",
      type: "Hackathon",
      tag: "#Hackathon",
    },
    {
      name: "Research hackathon",
      type: "Hackathon",
      tag: "#Hackathon",
    },
    {
      name: "and all type",
      type: "Hackathon",
      tag: "#Hackathon",
    },
    {
      name: "Robo war",
      type: "Robotics",
      tag: "#Robotics",
    },
    {
      name: "LFR",
      type: "Robotics",
      tag: "#Robotics",
    },
    {
      name: "Robo race",
      type: "Robotics",
      tag: "#Robotics",
    },
    {
      name: "Cat Talk",
      type: "speaker session",
    },
    {
      name: "Bioinsght Forum",
      type: "speaker session",
    },
    {
      name: "Civil Connect 2024",
      type: "speaker session",
    },
    {
      name: "Mathelatics",
      type: "Quiz Competions",
    },
    {
      name: "Anime Decoder",
      type: "Quiz Competions",
    },
    {
      name: "Automotive Odyssey",
      type: "Quiz Competions",
    },
    {
      name: "Labrats",
      type: "Quiz Competions",
    },
    {
      name: "Crypt AI",
      type: "Quiz Competions",
    },
    {
      name: "Workshop",
      type: "speaker session",
    },
    {
      name: "Paper Flying",
      type: "Field Events",
    },
    {
      name: "Bridge-o-mania",
      type: "Field Events",
    },
    {
      name: "Pressure Pulse",
      type: "Field Events",
    },
    {
      name: "AeroGlide",
      type: "Field Events",
    },
    {
      name: "LaunchCraft",
      type: "Field Events",
    },
    {
      name: "Seismic",
      type: "Field Events",
    },
    {
      name: "Devcraft",
      type: "Hackathon",
    },
    {
      name: "MLcodecrunch",
      type: "Hackathon",
    },
    {
      name: "pitchfork",
      type: "Hackathon",
    },
    {
      name: "chemodelessay",
      type: "Hackathon",
    },
    {
      name: "biotech venture",
      type: "Hackathon",
    },
    {
      name: "resarch hackathon",
      type: "Hackathon",
    },
    {
      name: "and all type",
      type: "Hackathon",
    },
    {
      name: "Robo war",
      type: "Robotics",
    },
    {
      name: "LFR",
      type: "Robotics",
    },
    {
      name: "Robo race",
      type: "Robotics",
    },
    {
      name: "Quiditch",
      type: "Robotics",
    },
    {
      name: "Robo soccer",
      type: "Robotics",
    },
    {
      name: "Kaun banega Chemopati",
      type: "Quiz Competions",
    },
    {
      name: "Techloop",
      type: "Quiz Competions",
    },
    {
      name: "Trivuim",
      type: "Quiz Competions",
    },
    {
      name: "Demystification",
      type: "Quiz Competions",
    },
    {
      name: "Workshop",
      type: "speaker session",
    },
    {
      name: "Paper Flying",
      type: "Field Events",
    },
    {
      name: "Bridge-o-mania",
      type: "Field Events",
    },
    {
      name: "Pressure Pulse",
      type: "Field Events",
    },
    {
      name: "AeroGlide",
      type: "Field Events",
    },
    {
      name: "LaunchCraft",
      type: "Field Events",
    },
    {
      name: "Seismic",
      type: "Field Events",
    },
    {
      name: "Devcraft",
      type: "Hackathon",
    },
    {
      name: "MLcodecrunch",
      type: "Hackathon",
    },
    {
      name: "pitchfork",
      type: "Hackathon",
    },
    {
      name: "chemodelessay",
      type: "Hackathon",
    },
    {
      name: "biotech venture",
      type: "Hackathon",
    },
    {
      name: "resarch hackathon",
      type: "Hackathon",
    },
    {
      name: "and all type",
      type: "Hackathon",
    },
    {
      name: "Robo war",
      type: "Robotics",
    },
    {
      name: "LFR",
      type: "Robotics",
    },
    {
      name: "Robo race",
      type: "Robotics",
    },
    {
      name: "Quiditch",
      type: "Robotics",
    },
    {
      name: "Robo soccer",
      type: "Robotics",
    },
    {
      name: "CaseQuest",
      type: "Non Tech",
    },
    {
      name: "Guessapalooza",
      type: "Non Tech",
    },
    {
      name: "Ecoprenieurs",
      type: "Non Tech",
    },
    {
      name: "Greensteel",
      type: "Non Tech",
    },
    {
      name: "Demystification",
      type: "Quiz Competions",
    },
    {
      name: "Workshop",
      type: "speaker session",
    },
    {
      name: "Paper Flying",
      type: "Field Events",
    },
    {
      name: "Bridge-o-mania",
      type: "Field Events",
    },
    {
      name: "Pressure Pulse",
      type: "Field Events",
    },
    {
      name: "AeroGlide",
      type: "Field Events",
    },
    {
      name: "LaunchCraft",
      type: "Field Events",
    },
    {
      name: "Seismic",
      type: "Field Events",
    },
    {
      name: "Devcraft",
      type: "Hackathon",
    },
    {
      name: "MLcodecrunch",
      type: "Hackathon",
    },
    {
      name: "pitchfork",
      type: "Hackathon",
    },
    {
      name: "chemodelessay",
      type: "Hackathon",
    },
    {
      name: "biotech venture",
      type: "Hackathon",
    },
    {
      name: "resarch hackathon",
      type: "Hackathon",
    },
    {
      name: "and all type",
      type: "Hackathon",
    },
    {
      name: "Robo war",
      type: "Robotics",
    },
    {
      name: "LFR",
      type: "Robotics",
    },
    {
      name: "Robo race",
      type: "Robotics",
    },
    {
      name: "Quiditch",
      type: "Robotics",
    },
    {
      name: "Robo soccer",
      type: "Robotics",
    },
    {
      name: "CaseQuest",
      type: "Non Tech",
    },
    {
      name: "Guessapalooza",
      type: "Non Tech",
    },
    {
      name: "Ecopreneurs 3.0: Case study competition",
      type: "Non Tech",
    },
    {
      name: "GreenSteel Symposium",
      type: "Non Tech",
    },
    {
      name: "Bits",
      type: "Programming",
    },
    {
      name: "CodeKaze",
      type: "Programming",
    },
    {
      name: "ERROR 404",
      type: "Programming",
    },
    {
      name: "Promptify",
      type: "Programming",
    },
    {
      name: "Code Script 2.0",
      type: "Programming",
    },
    {
      name: "Codelocks",
      type: "Programming",
    },
    {
      name: "Reverse Engineering",
      type: "Programming",
    },
    {
      name: "Bulls and Bears",
      type: "Finance",
    },
    {
      name: "Financial Cricket",
      type: "Finance",
    },
    {
      name: "Mock Stocks",
      type: "Finance",
    },
    {
      name: "Chess Warfare",
      type: "Miscellaneous",
    },
    {
      name: "Tech Cosplay",
      type: "Miscellaneous",
    },
    {
      name: "Desmos Dali",
      type: "Miscellaneous",
    },
    {
      name: "Jenga Snag",
      type: "Miscellaneous",
    },
    {
      name: "Tazer Hunt CTF",
      type: "Arcade",
    },
    {
      name: "Grand Nashify Tournament",
      type: "Arcade",
    },
    {
      name: "DeCyber",
      type: "Arcade",
    },
    {
      name: "Stratezenith",
      type: "Arcade",
    },
    {
      name: "Creative Canvas",
      type: "Design",
    },
    {
      name: "ILUX",
      type: "Design",
    },
    {
      name: "Sketch it",
      type: "Design",
    },
    {
      name: "Cad Battle",
      type: "Design",
    },
  ];

  useEffect(() => {
    async function get() {
      try {
        const arr = await getEvents();
        if (arr) {
          search
            ? setEvent(
                arr?.filter(
                  (val) =>
                    val.type === "Events" &&
                    val.name.toLowerCase().includes(search.toLowerCase())
                )
              )
            : setEvent(arr?.filter((val) => val.type === "Events"));
          search
            ? setArr(
                arr?.filter(
                  (val) =>
                    val.type === "Events" &&
                    val.name.toLowerCase().includes(search.toLowerCase())
                )
              )
            : setArr(arr?.filter((val) => val.type === "Events"));
          eval(process.env.NEXT_PUBLIC__);
        }
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    }
    get();
  }, []);

  const itemsPerPage = 8;

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
      console.error(error);
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
    } else if (name === "category") {
      if (value === "") {
        setEvent(arr);
        return;
      }
      const temp = arr.slice();
      setEvent(temp.filter((marr) => marr.type === value));
    } else {
      const temp = arr.slice();
      setCurrentPage(1);
      setEvent(
        temp.filter((event) => {
          return (
            event.name.toLowerCase().includes(value.toLowerCase()) ||
            event.description.toLowerCase().includes(value.toLowerCase())
          );
        })
      );
    }
  };

  return (
    <>
      {arr.length === 0 ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center w-full Events pb-[60px] ">
          <Toaster position="top-center" reverseOrder={false} />
          <h1 className="font-retrog xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-5xl flex justify-center mt-32 mb-6 text-white">
            Events
          </h1>

          {/* Buttons and SearchBar */}
          <div className="flex h-fit md:justify-between max-[768px]: justify-center w-[90%] max-[640px]: flex-wrap ">
            {/* Filter and Sort buttons */}
            <div className="flex h-fit md:w-fit max-[768px]:w-[80%] max-[480px]:w-fit md:justify-normal sm:justify-center max-[640px]:justify-between">
              {/* <Butt title="Filter" /> */}
              {/* <Butt title="Sort" /> */}
              <select
                name="filter"
                id="filter"
                value={filter.filter}
                onChange={handleChange}
                className="event-button bg-transparent w-[50%] text-center h-fit flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[4vw] md:text-[2vw] lg:text-[1.5vw]  px-3 py-2 my-1 mx-2"
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
                className="event-button bg-transparent w-[50%] text-center h-fit flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[4vw] md:text-[2vw] lg:text-[1.5vw]  px-5 py-2 my-1 mx-2"
              >
                <option value="">Sort By</option>
                <option value="date">Date</option>
                <option value="prize">Prize</option>
              </select>
              <select
                name="category"
                id="category"
                value={filter.category}
                onChange={handleChange}
                className="event-button bg-transparent sm:w-[50%] max-sm:w-[70%] text-center h-fit flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[4vw] md:text-[2vw] lg:text-[1.5vw]  px-4 py-2 my-1 mx-2"
              >
                <option value="">Category</option>
                <option value="Feild">Feild</option>
                <option value="Quiz">Quiz</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Robotics">Robotics</option>
                <option value="Non-Tech">Non-Tech</option>
                <option value="Programming">Programming</option>
                <option value="Finance">Finance</option>
                <option value="Arcade">Arcade</option>
                <option value="Design">Design</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
              {/* <Butt title="Filter"/> */}
              {/* <Butt title="Sort" /> */}
            </div>
            {/* Search Bar */}
            <div className="flex items-center w-full mt-3 md:mt-0 md:w-[35%] border-2 px-3 bg-white rounded-full ">
              <img src="/Search.png" alt="search" className="w-[5%]" />
              <div className="w-[95%]">
                <input
                  className="font-retrog outline-none p-3 !mb-0"
                  placeholder="Search for Events"
                  name="search"
                  onChange={handleChange}
                  value={filter.search}
                />
              </div>
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
      )}
    </>
  );
};

export default Events;
