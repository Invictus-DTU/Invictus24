"use client";
import React, { useState } from "react";
import Button from "../Components/Buttons/eventButton";
import EventCard from "./EventCard";

const Events = () => {
  const itemsPerPage = 4;

  const arr = [
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      prize: "Prize",
      time: "Time",
      Venue: "Venue",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      prize: "Prize",
      time: "Time",
      Venue: "Venue",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      time: "Time",
      Venue: "Venue",
      prize: "Prize",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      time: "Time",
      Venue: "Venue",
      prize: "Prize",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      time: "Time",
      Venue: "Venue",
      prize: "Prize",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      prize: "Prize",
      time: "Time",
      Venue: "Venue",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      prize: "Prize",
      time: "Time",
      Venue: "Venue",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      time: "Time",
      Venue: "Venue",
      prize: "Prize",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      time: "Time",
      Venue: "Venue",
      prize: "Prize",
    },
    {
      title: "Title",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
      date: "Date",
      time: "Time",
      Venue: "Venue",
      prize: "Prize",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <>
      <div className="flex flex-col items-center w-full Events pb-[60px]">
        <h1 className="font-retrog xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-5xl flex justify-center mt-32 text-white">
          Events
        </h1>

        {/* Filter and SearchBar */}
        <div className="flex justify-between w-[90%]">
          <div className="flex">
            <Button buttonText="Filter" />
            <Button buttonText="Sort By" />
          </div>
          <div className="lg:w-100 md:w-80 sm:w-60 flex items-center bg-white m-0 p-2 rounded-full">
            <div className="h-8 w-8">
              <img src="/Search.png" alt="search" className="w-8 h-8" />
            </div>
            <input
              className="flex shrink h-[80%] w-[85%] font-retrog border-0 border-none"
              placeholder="Search for Events"
            ></input>
          </div>
        </div>

        {currentItems.map((item, i) => (
          <EventCard key={i} props={item} />
        ))}

        {/* Pagination component with Next and Previous buttons */}
        <div className="pagination font-ticketing">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          {Array.from({ length: Math.ceil(arr.length / itemsPerPage) }).map(
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
            disabled={currentPage === Math.ceil(arr.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Events;
