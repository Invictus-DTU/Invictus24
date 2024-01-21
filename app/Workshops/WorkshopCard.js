"use client";
import React from "react";
import Image from "next/image";
import Butt from "../Components/Buttons/eventButton";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const WorkshopCard = (props) => {
  const { data: session } = useSession();
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
  const router = useRouter();

  function Location() {
    window.open(props.data.location, "_blank");
    return;
  }

  function redirect(id) {
    router.push(`/InputForm?event=${id}&prev=${"Workshops"}`);
    return;
  }

  function readMore() {
    window.open(props.data.readmore, "_blank");
    return;
  }
  
  return (
    <>
      <div
        className="bg-[#0000004d] p-3 w-[90vw] min-h-40 flex my-[20px] mx-[5vw] text-[#f0f8ff] backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] items-center max-[768px]:flex-wrap max-[768px]:justify-center"
        // className="main-box"
      >
        <img
          className="  bg-no-repeat shrink-0 xl:w-[25rem] lg:w-80 md:w-60 sm:w-[25rem] w-[100%] md:mr-3 rounded-3xl max-[768px]:justify-center"
          src={props.data.image || "/Card-Robo.png"}
          alt="event image"
          width={50}
          height={50}
        />

        {/* About */}
        <div className="w-3/5 lg:w-90 md:w-90  max-[768px]:w-[90%] self-start">
          <div className="font-retrog lg:text-3xl  max-[768px]:my-2 md:text-3xl sm:text-3xl text-4xl max-[768px]:flex justify-center">
            {props.data.name}
          </div>
          <div className="font-ticketing">
            {session &&
            props.status !== "closed" &&
            props.data.participationStatus === "participated" &&
            props.data.role !== "member" ? (
              <p>TeamId: {props.data.teamId} </p>
            ) : (
              <></>
            )}
          </div>
          <div className=" font-ticketing xl:text-lg sm:text-sm max-[640px]:text-base">
            {props.data.description}
          </div>
          <div className="w-56 text-2">
           <Butt title="Read More" action={readMore} />
          </div>
        </div>

        {/* //! Register Box */}
        <div className="xl:w-1/5 lg:w-90 md:w-100  max-[768px]:w-[100%] flex flex-col items-center  justify-center m-2.5 ">
          {/* Prize is hidden */}
          <div className="hidden">
            <img
              className="bg-no-repeat shrink-0 w-10 h-10"
              src="./Trophy.png"
              alt="Trophy"
              height="100%"
            />
            <div className="text-2xl font-retrog">{props.data.prize}</div>
          </div>
          {/* //! Location */}
          <div className="flex flex-col justify-center items-center max-[768px]:flex-row max-[768px]:justify-between max-[768px]:w-full max-[768px]:my-3">
            <div className="date font-retrog text-nowrap">
              {/* Date */}
              {props.data?.date.substring(0, 10).split("-")[2] + " "}
              {/* Month */}
              {months[props.data?.date.substring(0, 10).split("-")[1] - 1] +
                " "}
              {/* Year */}
              {props.data?.date.substring(0, 10).split("-")[0]}
            </div>
            <div className="venue font-retrog">
              {props.data.venue || "DTU"}
            </div>
          </div>

          <Butt title="Location" action={Location} />

          {session ? (
            props.data.status === "closed" ? (
              <Butt title="closed" />
            ) : props.data.participationStatus === "not participated" ? (
              <Butt title="Register " action={() => redirect(props.data._id)} />
            ) : props.data.role === "member" ? (
              <Butt title="participated" />
            ) : props.data.teamStatus === "not-submitted" ? (
              <>
                <Butt
                  title="Submit team"
                  action={async () => {
                    await props.handleTeamSubmit({
                      teamId: props.data.teamId,
                      teamSizeMIN: props.data.teamSizeMIN,
                      teamSizeMax: props.data.teamSizeMax,
                    });
                  }}
                />
              </>
            ) : (
              <Butt title="submitted" />
            )
          ) : (
            <Butt
              title="Book Now"
              action={() => {
                toast.error("Please SignIn or Register");
              }}
            />
          )}
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
