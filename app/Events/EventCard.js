'use client'
import React from "react";
import Butt from "././../Components/Buttons/eventButton";
import "./Card.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Toaster, toast } from 'react-hot-toast';
import { submitTeam } from "../helper";
import { useRouter } from "next/navigation";

const EventCard = (props) => {
  const { data: session } = useSession();
  const router = useRouter();

  function redirect(id){
    router.push(`/InputForm?event=${id}`);
    return;
  }

  

  return (
    <>
      <div className="bg-[#0000004d] p-3 w-[90vw] min-h-40 flex my-[20px] mx-[5vw] text-[#f0f8ff] backdrop-blur rounded-[25px] shadow-[0px_0px_20px_#8f8f8f8f] items-center max-[768px]:flex-wrap ">
        <Image
          className="  bg-no-repeat  shrink-0 xl:w-[25rem] lg:w-80 md:w-60 sm:w-[25rem] w-[100%] md:mr-3 rounded-3xl"
          src={props.data.image || "/Card-Robo.png"}
          alt="event image"
          width={50}
          height={50}
        />

        {/* About */}
        <div className="xl:w-3/5 lg:w-90 md:w-90  max-[768px]:w-[90%]">
          <div className="font-retrog lg:text-3xl  md:text-3xl sm:text-3xl text-4xl max-[640px]:flex justify-center">
            {props.data.name}
          </div>
          <div className=" font-ticketing xl:text-lg sm:text-sm max-[640px]:text-base">
            {props.data.description}
          </div>
        </div>

        {/* Register */}
        <div className="xl:w-1/5 lg:w-90 md:w-100  max-[768px]:w-100 flex flex-col items-center  justify-center">
          <div className="flex-col items-center  justify-center">
            <img src="/Trophy.png" alt="T" height="100%" />
            <div className="text-2xl font-retrog">{props.data.prize}</div>
          </div>

          <div className="location">
            <div className="date font-retrog text-nowrap">{props.data.date.substring(0,10)}</div>
            <div className="venue font-retrog">{props.data.venue || "DTU"}, {props.data.time || "time"}</div>
          </div>
          {session ? (
            props.status === 'closed' ? (
              <></>
            ) : props.data.participationStatus === 'not participated' ? (
              <Butt title="Register for Event" action={() => redirect(props.data._id)} />
            ) : props.data.role === 'member' ? (
              'participated'
            ) : props.data.teamStatus === 'not-submitted' ? (
              <>
                <p>TeamId: {props.data.teamId} </p>
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
              'submitted'
            )
          ) : (
            <Butt
              title="Register for Event"
              action={() => {
                console.log('clicked');
                toast.error('Please SignIn or Register');
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};


export default EventCard;