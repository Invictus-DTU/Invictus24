"use client";
import React from "react";

const EventCard = (props) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dev",
  ];
  return (
    <>
      <div
        className="bg-[#0000004d] h-full flex text-[#f0f8ff] justify-center items-center backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] flex-col lg:w-[100%] overflow-hidden overflow-y-scroll hidescroolhomecard  "
        // className="main-box"
      >
        <div className=" h-1/2 flex justify-center items-center mb-2 w-auto">
          <img
            src={
              props.data?.image &&
              !props.data?.image.startsWith("https://drive.google.com")
                ? props.data?.image
                : "/Card-Robo.png"
            }
            className=" h-full w-auto overflow-x-hidden cardhomeimage "
          />
        </div>

        <div className="flex w-full justify-around ">
          <div className="pb-2 font-retrog lg:text-3xl items-center text-center  md:text-2xl sm:text-3xl max-[640px]:flex justify-center max-md:text-xl max-md:">
            {props.data?.name}
          </div>
        </div>
        <div className="flex items-center gap-2 max-xl:hidden">
          <img
            className="h-10 max-md:h-10 max-sm:h-6 w-auto  "
            src="./Trophy.png"
            alt="Trophy"
            height="100%"
          />
          <div className="text-2xl max-md:text-xl font-retrog">
            {props.data?.prize.toString().substring(0,2) + "K" || 0}
          </div>
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          // <img
          //   className="h-12 max-md:h-10 max-sm:h-8"
          //   src="./Trophy.png"
          //   alt="Trophy"
          //   height="100%"
          // />
          <div className="text-2xl max-md:text-xl font-retrog">
            {props.data?.prize || 0}
          </div>
        </div>

        <div className="location text-center max-md:text-sm ">
          <div className="date font-retrog text-nowrap text-center w-full">
            {/* Date */}
            {props.data?.date.substring(0, 10).split("-")[2] + " "}{" "}
            {/* Month */}
            {months[props.data?.date.substring(0, 10).split("-")[1] - 1] + " "}
            {/* Year */}
            {props.data?.date.substring(0, 10).split("-")[0]}
          </div>
          <div className="venue font-retrog">
              {props.data?.venue || "DTU"} {props.data?.time || ""}
          </div>
        </div>

        {/* Register */}
      </div>
    </>
  );
};
// EventCard.prototype = {};
// EventCard.defaultProps = {
//   name: "Event Name",
//   detail:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
//   time: " 4 PM",
//   // photo: Robo,
//   prize: "20K",
//   date: "4th Feb 2024",
// };
// // default

export default EventCard;
