import React from "react";
import "./Background.css";

const CouncilCard = (props) => {
  return (
    <>
      <div className="w-[370px] h-[433px] flex flex-col items-center backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f]  mx-16 my-4">
        <div className="w-[334px] h-[334px] m-[18px] bg-zinc-300"></div>
        <p className="font-retrog text-2xl text-fuchsia-600">{props.name}</p>
        <p className="font-retrog text-lg text-fuchsia-600">{props.council}</p>
      </div>
    </>
  );
};

CouncilCard.defaultProps = {
  name: "Nikil Kumar",
  council: "Chairperson, TC",
};
export default CouncilCard;
