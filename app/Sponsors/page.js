import React from "react";
import Link from "next/link";
const Sponsors = () => {

  return (
    <div className="w-full Sponsors pb-[60px] pt-[80px]">
      <p className="font-retrog xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl max-[640px]:text-4xl flex justify-center mt-20 text-white">
        Sponsors
      </p>
      <div className="flex justify-center mt-10">


        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <Link href="https://adobe.com/" target="_blank" >
            <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
              <img className="h-46 flex" src="/adobe.png" alt="logo" />
            </div>
          </Link>
        </div>
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <Link href="https://gtechlearn.com" target="_blank" >
            <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
              <img className="h-46 flex" src="/gtech.jpeg" alt="logo" />
            </div>
          </Link>
        </div>
      </div>
      {/* <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-2xl text-yellow-500 flex justify-center mt-20">
        Gold Sponsor
      </p>
      <div className="flex justify-center mt-10">
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
      </div>

      <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-2xl text-[#C0C0C0] text-stale-100 flex justify-center mt-20">
        Silver Sponsors
      </p>
      <div className="flex justify-center flex-wrap mt-10">
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
      </div>

      <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-2xl text-orange-400 flex justify-center mt-20">
        Bronze Sponsors
      </p>
      <div className="flex justify-center flex-wrap mt-10">
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
          <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
            <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center flex-wrap mb-32">
        <div className="mx-20">
          <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-2xl text-orange-400 flex justify-center mt-20">
            Food Partners
          </p>
          <div className="flex justify-center flex-wrap mt-10">
            <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
              <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
                <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
              </div>
            </div>
            <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
              <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
                <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-20">
          <p className="font-retrog xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-2xl text-orange-400 flex justify-center mt-20">
            Event Partners
          </p>
          <div className="flex justify-center flex-wrap mt-10">
            <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
              <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
                <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
              </div>
            </div>
            <div className="w-52 h-52 flex justify-center rounded-3xl bg-black/[0.3] drop-shadow-[4px_0px_40px_rgba(255,255,255,0.33)] items-center mx-10 my-4">
              <div className="w-48 h-48 flex justify-center rounded-3xl bg-white items-center">
                <img className="w-40 h-14 flex" src="/logo.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Sponsors;
