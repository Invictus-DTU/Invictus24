"use client";
import React from "react";
import Butt from "../Components/Buttons/eventButton";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const EventCard = (props) => {
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

  function redirect(id) {
    if(props.data.unstop) router.push(props.data.unstop);
    else router.push(`/InputForm?event=${id}&prev=${"Events"}`);
    return;
  }

  function Location() {
    window.open(props.data.location, "_blank");
    return;
  }

  function readMore() {
    window.open(props.data.readmore, "_blank");
    return;
  }

  return (
    <>
      {/* !Main-box */}
      <div className="bg-[#0000004d] p-3 w-[90vw] min-h-40 flex my-[20px] mx-[5vw] text-[#f0f8ff] backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] items-center max-[768px]:flex-wrap max-[768px]:justify-center">
        <img
          className="bg-no-repeat  shrink-0 xl:w-[25rem] lg:w-80 md:w-60 sm:w-[25rem] w-[100%] md:mr-3 rounded-3xl"
          src={props.data.image || "/Card-Robo.png"}
          alt="event image"
          width={50}
          height={50}
        />

        {/* About */}
        <div className="w-3/5 lg:w-90 md:w-90  max-[768px]:w-[90%] self-start">
          <div className="font-retrog lg:text-3xl  md:text-3xl sm:text-3xl text-4xl mt-0 max-[640px]:my-2 max-[640px]:flex justify-center">
            {props.data?.name}
          </div>
          <div className="font-ticketing">
            {session &&
            props.status !== "closed" &&
            props.data?.participationStatus === "participated" &&
            props.data?.role !== "member" ? (
              <p>TeamId: {props.data?.teamId} </p>
            ) : (
              <></>
            )}
          </div>
          <div className=" font-ticketing xl:text-lg sm:text-sm max-[640px]:text-base">
            {props.data?.description}
          </div>
          <div className="w-56 text-2">
           <Butt title="Read More" action={readMore} />
          </div>
        </div>

        {/* Register */}
        <div className="xl:w-1/5 lg:w-90 md:w-100 max-[768px]:w-[100%] flex flex-col items-center gap-2 justify-center m-2.5 ">
          <div className="max-[768px]:flex max-[768px]:justify-between max-[768px]:w-[95%]">
            <div className="flex items-center">
              <img
                className="bg-no-repeat shrink-0 max-[768px]:h-12 h-20"
                src="./Trophy.png"
                alt="Trophy"
                height="100%"
              />
              <div className="text-2xl font-retrog">{props.data?.prize}</div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="date font-retrog w-fit text-nowrap">
                {/* Date */}
                {props.data?.date.substring(0, 10).split("-")[2] + " "}{" "}
                {/* Month */}
                {months[props.data?.date.substring(0, 10).split("-")[1] - 1] +
                  " "}
                {/* Year */}
                {props.data?.date.substring(0, 10).split("-")[0]}
              </div>
              <div className="venue font-retrog">
                {props.data?.venue || "DTU"}
              </div>
            </div>
          </div>

          <Butt title="Location" action={Location} />

          {session ? (
            props.data.status === "closed" ? (
              <Butt title="closed" />
            ) : props.data?.participationStatus === "not participated" ? (
              <Butt
                title="Register "
                action={() => redirect(props.data?._id)}
              />
            ) : props.data?.role === "member" ? (
              <Butt title="participated" />
            ) : props.data?.teamStatus === "not-submitted" ? (
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
              title="Register"
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

export default EventCard;
