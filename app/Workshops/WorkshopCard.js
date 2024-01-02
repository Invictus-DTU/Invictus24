import React from "react";
import Button from "../Components/Buttons/eventButton";
const WorkshopCard = ({ props }) => {
  return (
    <>
      <div
        className="bg-[#0000004d] p-3 w-[90vw] min-h-40 flex my-[20px] mx-[5vw] text-[#f0f8ff] backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] items-center max-[768px]:flex-wrap "
        // className="main-box"
      >
        <img
          className="  bg-no-repeat  shrink-0 xl:w-[25rem] lg:w-80 md:w-60 sm:w-[25rem] w-[100%] md:mr-3 rounded-3xl"
          src="/Card-Robo.png"
          alt="Robot-Image"
        />

        {/* About */}
        <div className="xl:w-3/5 lg:w-90 md:w-90  max-[768px]:w-[90%]">
          <div className="font-retrog lg:text-3xl  md:text-3xl sm:text-3xl text-4xl max-[640px]:flex justify-center">
            {props.title}
          </div>
          <div className=" font-ticketing xl:text-lg sm:text-sm max-[640px]:text-base">
            {props.detail}
          </div>
        </div>

        {/* Register */}
        <div className="xl:w-1/5 lg:w-90 md:w-100  max-[768px]:w-[100%] flex flex-col items-center  justify-center m-2.5">
          <Button buttonText="Register for events"></Button>
          <div className="location">
            <div className="date font-retrog text-nowrap">{props.date}</div>
            <div className="venue font-retrog">
              {props.Venue}, {props.time}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// WorkshopCard.prototype = {};
// WorkshopCard.defaultProps = {
//   name: "Event Name",
//   detail:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ut. Tempora omnis assumenda incidunt sequi consectetur dolore, rem enim molestias, explicabo delectus sit dignissimos hic repudiandae in repellat. Sed possimus corporis optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non blanditiis cupiditate fuga inventore rem animi, necessitatibus ratione tempore, totam quasi magnam fugit quisquam provident. Voluptatem temporibus atque corrupti, explicabo quos ad totam illum possimus! Eius modi quas ipsum esse molestias iusto nihil obcaecati voluptates ullam? Id similique, consequatur provident dolorem sunt ad commodi hic error.",
//   time: " 4 PM",
//   // photo: Robo,
//   date: "4th Feb 2024",
// };
// default

export default WorkshopCard;
