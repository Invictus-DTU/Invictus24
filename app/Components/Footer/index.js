import React from "react";
import "./style.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer flex relative flex-row items-center justify-center bg-black/[0.75] max-sm:pt-4 h-[20vh]">
        <div className="max-[815px]:hidden flex justify-center items-center">
          <Link href="/">
            <img
              src="/invictuslogo2.png"
              alt="invictus logo"
              className="w-[auto] h-20 my-4 mr-4 ml-6 md:mr-10 md:ml-2"
              // className="w-[auto] h-20 my-4 mr-10 ml-2"
            />
          </Link>
        </div>
        <div className="max-[815px]:hidden">
          <p className="text-5xl mx-10 text-white">| </p>
        </div>
        <div className="flex flex-row max-sm:flex-col justify-center items-center">
          <div className="text-xl text-center font-retrog mx-6 md:8 xl:text-xl lg:text-lg md:text-md sm:text-sm max-[640px]:text-xs justify-center items-center text-white">
            © Designed & Developed by ❤️ Invictus Team
          </div>
          <div className="">
            <p className="text-5xl mx-10 max-[815px]:hidden text-white">
              |{" "}
            </p>
          </div>
          <div className="flex flex-col max-[650px]:ml-28 mx-10 max-sm:mx-0 max-sm:flex max-sm:justify-center ">
            <div className="flex flex-row">
              <div className="mx-2 my-2">
                <a
                  href="https://www.instagram.com/invictus_dtu/"
                  target="_blank"
                >
                  <img src="/Instagram.png" alt="insta" />
                </a>
              </div>
              <div className="mx-2 my-2">
                <a href="https://www.facebook.com/InvictusDtu/" target="_blank">
                  <img src="/Facebook.png" alt="fb" />
                </a>
              </div>
              <div className="mx-2 my-2">
                <a
                  href="https://www.linkedin.com/company/invictus-dtu/"
                  target="_blank"
                >
                  <img src="/LinkedIn Circled.png" alt="linkedin" />
                </a>
              </div>
            </div>
            <div className="font-retrog xl:text-xl lg:text-lg md:text-md sm:text-sm text-white justify-center items-center max-sm:text-center max-sm:mb-6">
              @invictus_dtu
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
