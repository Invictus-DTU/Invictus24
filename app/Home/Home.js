"use client";
import React from "react";
import HomeButton from "../Components/Buttons/homeButton";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getEvents } from "../helper/index";
import Slider from "../Components/Swiper/Swiper";
import slides from "../Components/Swiper/images.json";
import HomeEventCard from "./HomeEventCard";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import "./swiper.css"

const Home = () => {
  const { data: session } = useSession();
  const [event, setEvent] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function get() {
      try {
        const arr = await getEvents();
        if (arr) {
          setEvent(arr);
          console.log(arr)
        }
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    }
    get();
  }, []);

  function redirect() {
    router.push("/Registeration");
    return;
  }


  return (
    <main className="w-full h-[400vh] overflow-auto">
      <div className="w-full h-screen top-0 left-0 flex flex-col justify-center items-center bg-[#05063F]">
        <img
          src="/bg.png"
          className=" w-full absolute h-full top-0 left-0 shrink-0 object-cover opacity-50 z-2"
        />
        {/* //! Home Page */}
        <div className="z-1 flex flex-col py-24 h-screen absolute top-0 items-center justify-center">
          {/*  justify around->center*/}
          {/* //! invictus */}
          <div className="w-fit flex flex-col gap-0 lg:mb-20 max-[1024px]:mb-10">
            {/* mb added for button*/}
            <div className="font-retrog text-white text-[4vw] xl:text-[2vw]">
              10th Feb ‘24
            </div>
            {/* Leading added in INVICTUS */}
            <div className="font-karma text-[12vw] 2xl:text-[10vw] text-white tracking-wide mx-1 text-center leading-[12vw] 2xl:leading-[10vw]">
              INVICTUS
            </div>
            <div className="font-retrog text-white text-[4vw] xl:text-[2vw] text-right mt-3">
              Life in a Pixelated Era
            </div>
          </div>
          {session ? (
            <></>
          ) : (
            <HomeButton buttonText="Register Now" action={redirect} />
          )}
        </div>
      </div>

        <div className="w-full h-[300vh] top-0 left-0 flex flex-col bg-[#05063F]">
          <img
            src="/bg2.png"
            className=" w-full absolute h-[300vh] top-[100vh] left-0 shrink-0 object-cover opacity-30 z-2  "
          />
          <div className="z-1 h-[100vh] flex flex-col justify-evenly absolute top-[100vh] items-center text-white">
            <div className="font-retrog max-[640px]:text-[10vw] text-[6vw]">
              About
            </div>
            <p className="font-ticketing sm:max-[800px]:text-[3vw] sm:text-[2vw] lg:text-[1.5vw] px-[10vw] text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend
            </p>
            <div className="flex gap-[8vw]">
              <figure>
                <img
                  src="/foot.png"
                  className=" max-[625px]:h-[15vw] md:h-[8vw] md:w-[8vw]"
                />
                <figcaption className="text-center lg:text-[1.75vw] font-ticketing max-[375px]:leading-[4vw] max-sm:leading-[3vw] sm:leading-[2vw]">
                  20,000+
                  <br />
                  Footfall
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/grad.png"
                  className="max-[625px]:h-[15vw] md:h-[8vw] md:w-[8vw]"
                />
                <figcaption className="text-center lg:text-[1.75vw] font-ticketing max-[375px]:leading-[4vw] max-sm:leading-[3vw] sm:leading-[2vw]">
                  100+
                  <br />
                  Colleges
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/calendar.png"
                  className="max-[625px]:h-[15vw] md:h-[8vw] md:w-[8vw]"
                />
                <figcaption className="text-center lg:text-[1.75vw] font-ticketing max-[375px]:leading-[4vw] max-sm:leading-[3vw] sm:leading-[2vw]">
                  60+
                  <br />
                  Events
                </figcaption>
              </figure>
            </div>
          </div>

          <div className='z-1 w-full h-[230vh] sm:h-[100vh] flex flex-col justify-center absolute top-[200vh] items-center text-white '>
          <div className='font-retrog max-[640px]:text-[10vw] text-[6vw]'>
            Events
          </div>
          <div className=' w-full'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              centeredSlides={true}
              slidesPerView={3}
              // navigation
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              // pagination={{clickable: true,}}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
            {event.length>0 && event.map((slide, idx) => (
              <SwiperSlide key={idx} >
                <HomeEventCard data={slide} />
              </SwiperSlide>
            ) )}
            </Swiper>
          </div>
          </div>

          <div className="z-1 w-full h-[100vh] flex flex-col justify-center absolute top-[300vh] items-center text-white ">
            <h2 className=" h-1/4 font-retrog max-[640px]:text-[10vw] text-[6vw] flex justify-center items-center">
              Gallery
            </h2>
            <div className=" w-full">
              <Slider slides={slides} />
            </div>
          </div>
        </div>
    </main>
  );
};

export default Home;