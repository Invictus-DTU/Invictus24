import React from "react";
import CouncilCard from "./CouncilCard";
const Council = () => {
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
          <CouncilCard />
          <CouncilCard />
          <CouncilCard />
          <CouncilCard />
          <CouncilCard />
          <CouncilCard />
        </div>

        <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-3xl text-fuchsia-600 flex justify-center mt-20">
          Heads
        </p>

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Logistics</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Corporate</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Creatives</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600 text-center">
              Public Relation
            </p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Web Dev</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600 text-center">
              SM & Content
            </p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Operations</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Hospitality</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>
        </div>

        <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-3xl text-fuchsia-600 flex justify-center mt-20">
          Co-Heads
        </p>

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Logistics</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Corporate</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Creatives</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600 text-center">
              Public Relation
            </p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Web Dev</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600 text-center">
              SM & Content
            </p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Operations</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>

          <div className="flex flex-col mx-16 my-3 items-center">
            <p className="font-retrog text-2xl text-fuchsia-600">Hospitality</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
            <p className="font-retrog text-1.5xl text-white">Nikil Kumar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Council;
