import React from "react";
import Image from "next/image";
const EventCard = (props) => {
  return (
    <>
      <div
        className="bg-[#0000004d] h-full flex text-[#f0f8ff] justify-center items-center backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] flex-col "
        // className="main-box"
      >
        <div className=" h-1/2 flex justify-center items-center mb-2">
          <img
            src={props.data?.image || "/Card-Robo.png"}
            className=" h-full w-full "
          />
        </div>

        <div className="flex flex-col w-full ">
          <div className="font-retrog text-wrap lg:text-3xl items-center text-center  md:text-3xl sm:text-3xl text-4xl max-[640px]:flex justify-center">
            {props.data?.name}
          </div>

          <div className="flex gap-2">
            <img
              className="h-14"
              src="./Trophy.png"
              alt="Trophy"
              height="100%"
            />
            <div className="text-3xl font-retrog">{props.data?.prize || 0}</div>
          </div>
        </div>

        <div className="location text-center ">
          <div className="date font-retrog text-nowrap">
            {props.data?.date?.substring(0, 10)}
          </div>
          <div className="venue font-retrog">
            {props.data?.venue || "DTU"}, {props.data?.time || "time"}
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
