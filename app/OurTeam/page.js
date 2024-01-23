"use client";
import React from "react";
import CouncilCard from "./CouncilCard";
const Council = () => {
  const Council = [
    { name: "Shashank Jha", postion: "General Secretary, TC", pic: "/shashank.jpg" },
    { name: "Om Shankar Sahay", postion: "Joint Secretary, TC", pic: "/om.jpg"},
    { name: "Aman Gupta", postion: "Joint Secretary, TC", pic:"/aman.jpeg" },
    { name: "Dheeresh Chandra", postion: "Joint Secretary, TC", pic: "/dheeresh.jpg"},
    { name: "Akarsh Rai", postion: "Treasurer, TC" , pic: "/akarsh.jpg"},
    { name: "Ashish Chotani", postion: "Joint Treasurer, TC", pic:"/ashish.jpg"},
  ];
  // const Heads = {
  //   Logistics: ["Nikhil Kumar", "Prashant"],
  //   Corporate: ["Nikhil Kumar", "Prashant"],
  //   Creatives: ["Nikhil Kumar", "Prashant"],
  //   "Public Relation": ["Husain Saifee", "Areeb Ahmed Khan"],
  //   WebDev: ["Nikhil Kumar", "Prashant"],
  //   "SM & Content": ["Anshita Garg", "Anshita Garg"],
  //   Operations: ["Nikhil Kumar", "Prashant"],
  //   Hospitality: ["Nikhil Kumar", "Gitansh Mehta"],
  // };
  // const CoHeads = {
  //   Logistics: ["Nikhil Kumar", "Prashant"],
  //   Corporate: ["Nikhil Kumar", "Prashant"],
  //   Creatives: ["Nikhil Kumar", "Prashant"],
  //   "Public Relation": ["Nikhil Kumar", "Prashant"],
  //   WebDev: ["Nikhil Kumar", "Prashant"],
  //   "SM & Content": ["Nikhil Kumar", "Prashant"],
  //   Operations: ["Nikhil Kumar", "Prashant"],
  //   Hospitality: ["Nikhil Kumar", "Prashant"],
  // };
  //   return <Image src="/Council.png" alt="photo" width={500} height={300} />;
  return (
    <>
      {/* <body className="Council"> */}
      <div className="Council w-full pb-[60px] pt-[80px]">
        <p className="font-retrog xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-5xl flex justify-center mt-32 text-white">
          Our Team
        </p>

        <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-3xl text-fuchsia-600 flex justify-center mt-20 text-center">
          Technical Council
        </p>
        <div className="flex flex-wrap justify-center mt-10">
          {Council.map((councilMember, index) => (
            <CouncilCard
              name={councilMember.name}
              postion={councilMember.postion}
              pic= {councilMember.pic}
              index={index}
            />
          ))}
        </div>

        {/* <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-3xl text-fuchsia-600 flex justify-center mt-20">
          Heads
        </p>

        <div className="flex flex-wrap gap-10 justify-center">
          {Object.keys(Heads).map((head, index) => (
            <div
              key={index}
              className="flex flex-col my-3 md:w-[33.33%] lg:w-[20%] items-center"
            >
              <p className="font-retrog text-2xl text-fuchsia-600">{head}</p>
              {Heads[head].map((ele, index) => (
                <p key={index} className="font-retrog text-1.5xl text-white">
                  {ele}
                </p>
              ))}
            </div>
          ))}
        </div>

        <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-3xl text-fuchsia-600 flex justify-center mt-20">
          Co-Heads
        </p>

        <div className="flex flex-wrap gap-10 justify-center">
          {Object.keys(CoHeads).map((cohead, index) => (
            <div
              key={index}
              className="flex flex-col my-3 md:w-[33.33%] lg:w-[20%] items-center"
            >
              <p className="font-retrog text-2xl text-fuchsia-600">{cohead}</p>
              {CoHeads[cohead].map((ele, index) => (
                <p key={index} className="font-retrog text-1.5xl text-white">
                  {ele}
                </p>
              ))}
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Council;
