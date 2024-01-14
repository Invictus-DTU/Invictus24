'use client'
import React from "react";
const CouncilCard = (props) => {
  return (
    <>
      <div key={props.index} className="min-[480px]:w-[370px] max-[480px]:w-[80%] flex flex-col items-center backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] pt-3 mx-16 my-4">
        <img
          className="w-[334px]  max-[640px]:shirnk  m-[18px] bg-zinc-300"
          src={props.pic}
          alt="Pic"
        />
        <p className="font-retrog text-2xl text-fuchsia-600">{props.name}</p>
        <p className="font-retrog text-lg text-fuchsia-600 text-center mb-5">
          {props.postion}
        </p>
      </div>
    </>
  );
};

CouncilCard.defaultProps = {
  name: "Nikhil Kumar",
  council: "Chairperson, TC",
  pic: "/Profile.png",
};
export default CouncilCard;
