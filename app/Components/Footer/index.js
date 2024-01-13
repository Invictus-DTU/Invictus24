import React from "react";
import "./style.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer flex flex-col min-[844px]:flex-row items-center justify-center gap-0 px-10 min-[844px]:gap-24 h-[20vh]">
      <div className="border-r-2 px-10 border-white hidden min-[844px]:inline">
        <Link href="/">
          <img
            src="/invictuslogo2.png"
            alt="invictus logo"
            className="w-[7rem]"
          />
        </Link>
      </div>
      <div className="text-white font-retrog border-b-2 pb-2 min-[844px]:border-b-0 text-[8px] min-[321px]:text-sm  min-[927px]:text-xl text-center ">
        @Designed and Developed by ❤️ Invictus Team
      </div>
      <div className="flex flex-col items-center gap-1 pt-2 min-[844px]:pt-0 min-[844px]:border-l-2 px-10">
        <div className="flex">
          <a
            href="https://www.instagram.com/invictus_dtu/"
            target="_blank"
            className="w-8"
          >
            <img src="/Instagram.png" alt="insta" />
          </a>
          <a
            href="https://www.facebook.com/InvictusDtu/"
            target="_blank"
            className="w-8"
          >
            <img src="/Facebook.png" alt="fb" />
          </a>
          <a
            href="https://www.linkedin.com/company/invictus-dtu/"
            target="_blank"
            className="w-8"
          >
            <img src="/LinkedIn Circled.png" alt="linkedin" />
          </a>
        </div>
        <div className="font-retrog text-white text-[12px]">@invictus_dtu</div>
      </div>
    </footer>
  );
};

export default Footer;
