"use client";
import React, { useState } from "react";
import Butt from "../Components/Buttons/eventButton";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createTeam } from "../helper";

const EventCard = (props) => {
  const { data: session } = useSession();
  const [reg, setReg] = useState(false);

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
    if (props.data.unstop !== undefined && props.data.unstop !== "")
      router.push(props.data.unstop);
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

  function openlink() {
    window.open(props.data.unstop, "_blank");
    return;
  }

  const handleCreateTeamSubmit = async (e) => {
    e.preventDefault();
    try {
      if (props.data?.unstop != "") {
        openlink();
        return;
      }
      const newTeamId = uuidv4();
      const teamName = newTeamId.substring(0, 5) + "ofdjo-ftybd";
      const res = await createTeam({
        teamname: teamName,
        teamId: newTeamId,
        eventName: props.data._id,
      });
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        setReg(true);
      }
    } catch (error) {
      toast.error("some error occured");
    }
  };

  props.data.whatsapp = "https://chat.whatsapp.com/CApRHLA0cgx82Ea4hKcUiX";

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
          <div className="font-retrog text-center md:text-left lg:text-3xl  md:text-3xl sm:text-3xl text-4xl mt-0 max-[640px]:my-2 max-[640px]:flex justify-center">
            {props.data?.name}
          </div>

          {session &&
          props.status !== "closed" &&
          props.data?.participationStatus === "participated" &&
          props.data?.role !== "member" ? (
            <div className="flex font-bold xl:text-lg sm:text-sm space-x-1">
              <p>TeamId: </p>
              <CopyToClipboard text={props.data?.teamId}>
                <span
                  className="text-yellow-400 cursor-pointer"
                  onClick={() => toast.success("Copied to clipboard!")}
                >
                  {props.data?.teamId}
                </span>
              </CopyToClipboard>
              <img
                src="/copy.png"
                alt="Copy to Clipboard"
                className="cursor-pointer w-4 h-4"
                onClick={() => {
                  navigator.clipboard.writeText(props.data?.teamId);
                  toast.success("Copied to clipboard!");
                }}
              />
            </div>
          ) : (
            <></>
          )}

          {props.data.teamSize ? (
            <>
              <div className="font-bold xl:text-lg sm:text-sm max-[640px]:text-base flex space-x-1">
                <p>
                  Members:{" "}
                  {"(" +
                    props.data.teamSize +
                    "/" +
                    props.data.teamSizeMax +
                    ")"}
                </p>
                <img
                  src={
                    props.data.teamSize >= props.data.teamSizeMIN
                      ? "/green.png"
                      : "/red.png"
                  }
                  alt="Copy to Clipboard"
                  className="cursor-pointer w-5"
                  onClick={() => {
                    navigator.clipboard.writeText(props.data?.teamId);
                    toast.success("Copied to clipboard!");
                  }}
                />
              </div>
            </>
          ) : (
            <></>
          )}

          <div className=" font-ticketing xl:text-xl sm:text-md max-[640px]:text-md">
            {/* {props.data?.description} */}
            {props.data ? (
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: props.data.description }}
              ></div>
            ) : (
              <></>
            )}
          </div>

          <br/>
          <div className="flex w-full justify-between md:justify-start items-center">
            <div className="w-fit text-2">
              <a
                className="font-bold text-xl underline text-yellow-400 pr-5 "
                href={props.data.readmore}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Rule Book
              </a>
            </div>

            <span className="font-bold text-xl hidden md:flex underline text-yellow-400">
              |
            </span>

            <div className="text-2 pl-5 ">
              <a
                className="font-bold flex text-xl underline text-yellow-400"
                href={props.data.whatsapp}
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <span className="underline pr-2">Whatsapp</span>
                <Image src={"/whatsapp.png"} width={28} height={25} />
              </a>
            </div>
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
              <div className="text-2xl font-retrog">
                {props.data?.prize.toString().substring(0, 2) + "K"}
              </div>
            </div>

            <div className="flex max-[400px]:text-[11px] flex-col justify-center items-center">
              <div className="date font-retrog w-fit text-wrap">
                {/* Date */}
                {props.data?.date.substring(0, 10).split("-")[2] + " "}{" "}
                {/* Month */}
                {months[props.data?.date.substring(0, 10).split("-")[1] - 1] +
                  " "}
                {/* Year */}
                {props.data?.date.substring(0, 10).split("-")[0]}
                {/* {", "} */}
                {/* Time */}
                {/* {props.data?.time} */}
              </div>
              <div className="venue font-retrog">
                {props.data?.venue || "DTU"}
              </div>
            </div>
          </div>
          <Butt title="Location" action={Location} />

          {/* <Butt title="Register" action={() => redirect(props.data?._id)} /> : */}
          {session ? (
            props.data.status === "closed" ? (
              <Butt title="closed" />
            ) : props.data?.participationStatus === "not participated" ? (
              props.data.teamSizeMax > 1 ? (
                <Butt
                  title="Register"
                  action={() => redirect(props.data?._id)}
                />
              ) : reg ? (
                <Butt title="Submitted" />
              ) : (
                <Butt title="Register" action={handleCreateTeamSubmit} />
              )
            ) : props.data?.teamStatus === "not-submitted" ? (
              <>
                <Butt
                  title="Submit team"
                  action={async () => {
                    const confirm = window.confirm(
                      "Are you sure to Submit your Team?"
                    );
                    if (confirm) {
                      await props.handleTeamSubmit({
                        teamId: props.data.teamId,
                        teamSizeMIN: props.data.teamSizeMIN,
                        teamSizeMax: props.data.teamSizeMax,
                      });
                    }
                  }}
                />
              </>
            ) : (
              <Butt title="Submitted" />
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
