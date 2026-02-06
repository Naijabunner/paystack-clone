"use client";
import { Play } from "lucide-react";
import MapSvg from "@/components/map-svg";
import HeroInput from "./_components/hero-input";
import { Button } from "@/components/ui/button";
/**
 * Hero Section
 */
const HeroSection = () => {
  return (
    <section className="flex flex-col bg-[#f2fff4]   relative overflow-hidden text-black  ">
      <main className=" flex flex-col  p-10 max-xl:pt-25   max-xl:pb-10  max-sm:px-5 justify-between xl:grid xl:grid-cols-[40%_60%] gap-5 pb-0 min-h-fit h-screen  xl:max-h-212.5 z-10 w-full justify- max-w-335 mx-auto "
      >
        <LeftContainer />
        <RightContainer />
      </main>
      <MapBackGround />
    </section>
  );
};
export default HeroSection;

/**
 * Left Container
 */
const LeftContainer = () => {
  return (
    <div className="flex-1 flex flex-col justify-center gap-y-5 w-full  max-w-150 relative z-20"
    >
      <div className="fade-in-up visible  delay-1 ">
        <HeroHeader />
      </div>
      <div className="fade-in-up visible delay-2 ">
        <HeroDescription />
      </div>
      <div className="fade-in-up visible  delay-3 ">
        <HeroInput />
      </div>
    </div>
  );
};

/**
 * Right Container
 */
const RightContainer = () => {
  return (
    <div className="  relative  flex flex-1 w-full h-full  justify-center items-center gap-28  ">
      <BottomTextAndButton />
    </div>
  );
};

/**
 * Bottom Text and Button
 */
const BottomTextAndButton = () => {
  return (
    <div className="self-end flex w-full items-center mb-10 max-sm:mb-5 pb-5 gap-5 ">
      <p className="max-w-md  max-xsmall:text-xs max-sm:text-sm max-sm:max-w-[300px] max-xsmall:max-w-[200px]  font-semibold text-lg text-right  ml-auto">
        Watch how  is shaping the future of community exchange.
      </p>
      <div>
        <Button className="bg-blue-09 size-10 max-sm:size-9 rounded-full flex justify-center items-center cursor-pointer transition-all">
          <Play className="stroke-0 fill-white" />
        </Button>
      </div>
    </div>
  );
};

/**
 * Map Background
 */
const MapBackGround = () => {
  return (
    <div
      className="absolute bottom-0 top-0 flex justify-center items-center max-sm:-top-72 right-0 h-full rounded-l-[50%] rounded-[50%] max-w-250  bg--foreground overflow-hidden "
    >
      {/* Slow floating effect */}
      <div
        className="h-full translate-x-10 translate-y-32  scale-110 z-30"
      >
        <MapSvg />
      </div>
    </div>
  );
};


/**
 * Hero Header
 */
const HeroHeader = () => {
  return (
    <h1 className="text-[52px] max-xsmall:text-[35px] max-sm:text-[42px] leading-[1.25] font-bold  ">
      Modern online and offline payments for Africa
    </h1>
  );
};

/**
 * Hero Description
 */
const HeroDescription = () => {
  return (
    <p className=" text-base  max-w-[450px] max-sm:text-sm line-clamp-4 ">
      Paystack helps businesses in Africa get paid by anyone, anywhere in the world


    </p>
  );
};
