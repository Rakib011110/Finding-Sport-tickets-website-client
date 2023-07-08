import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import BannerCarousel from "./BannerCourosel";
import bgImg from "../../../assets/pngwing.com (4).png";

const Banner = () => {
  return (
    <div>
      <div className=" ">
        <div className="relative   ">
          <div className="hidden md:block">
            {/* <img
              className="absolute  bg-center w-full mx- h-full inset-0"
              src={bgImg}
              alt
            /> */}
          </div>

          <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
            <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
              <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
                Build, review and ship with ease
              </h1>
              <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                <h2>
                  The next big thing starts here. Start building with Prodify
                  and be the first to market with a product that is ready to
                  take on the competition and delight your customers
                </h2>
              </div>
              <div className="lg:flex">
                <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                  Start building now
                </button>
                <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                  Try it out
                </button>
              </div>
            </div>

            <BannerCarousel></BannerCarousel>

            <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
              Start building now
            </button>
            <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
              Try it out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
