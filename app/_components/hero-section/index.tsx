"use client";
import { Play } from "lucide-react";
import MapSvg from "@/components/map-svg";
import HeroInput from "./_components/hero-input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
/**
 * Hero Section
 */
const HeroSection = () => {
  return (
    <section className="flex flex-col bg-[#f2fff4]   relative overflow-hidden  ">
      <main className=" flex flex-col  max-xl:p-10 max-xl:pt-25 max-md:pt-40 max-md:pb-25 px-3 max-md:px-4 justify-between  pb-0 min-h-fit h-full md:h-screen  max-h-195  w-full max-w-310 mx-auto "
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
    <div className="flex-1  flex flex-col justify-center  gap-y-5 w-full  max-w-140 relative z-40"
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
    <div className="  relative flex justify-between max-md:mt-16  max-md:flex-col  w-full  md:items-center  md:pb-10   ">
      <BottomTextAndButton />
      <hr className="w-full md:hidden pb-10  border-gray-200 mt-10" />
      <TrustedBusinesses />
    </div>
  );
};

/**
 * Bottom Text and Button
 */
const BottomTextAndButton = () => {
  return (
    <div className=" w-fit space-y-5  ">
      <p className=" max-xsmall:text-xs max-sm:text-sm  font-medium text-base  px-0 mx-0  ">
Trusted by over 200,000 business 
      </p>
      <div className="flex gap-x-2 max-md:items-start">
<Image unoptimized src="https://assets.paystack.com/assets/img/logos/merchants/Dominos-Plain.svg" width={100} height={100} alt="" className="object-contain max-h-[19px] max-md:max-w-[70px]  md:max-h-[29px]" />
<Image unoptimized src="https://assets.paystack.com/assets/img/logos/merchants/mtn-group-grayscale.svg" width={100} height={100} alt="" className="object-contain max-h-[19px] max-md:max-w-[70px]  md:max-h-[29px]" />
<Image unoptimized src="https://assets.paystack.com/assets/img/logos/merchants/Bolt-Stack-Blue_200304_153027.svg" width={100} height={100} alt="" className="object-contain max-h-[19px] max-md:max-w-[70px]  md:max-h-[29px]" />
<Image unoptimized src="https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg" width={100} height={100} alt="" className="object-contain max-h-[19px] max-md:max-w-[70px]  md:max-h-[29px]" />
      </div>
    </div>
  );
};
/**
 * Trusted Businesses
 */
const TrustedBusinesses = () => {
  return (
    <div className=" flex w-fit items-center gap-2 self-end ">
      <p className="max-w-[408px]  max-xsmall:text-xs max-sm:text-sm max-sm:max-w-[300px] max-xsmall:max-w-[200px]  font-medium text-base text-right ">
       Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss working with Paystack.
      </p>
      <div>
        <Button className="bg-[#0da4db] size-10 max-sm:size-9 rounded-full flex justify-center items-center cursor-pointer transition-all">
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
      className="absolute bottom-0 top-0 flex justify-center bg-red- items-center max-sm:-top-72 right-0 h-full rounded-l-[50%] rounded-[50%] max-w-[950px]  bg--foreground overflow-hidden "
    >
      {/* Slow floating effect */}
      <div
        className="h-full translate-x-9 translate-y-15  scale- z-30"
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
    <h1 className=" text-[clamp(33px,4vw,48px)] leading-[1.25] font-bold font-boing  ">
      Modern online and offline payments for Africa
    </h1>
  );
};

/**
 * Hero Description
 */
const HeroDescription = () => {
  return (
    <p className=" text-[clamp(16px,2vw,20px)] line-clamp-4 ">
      Paystack helps businesses in Africa get paid by anyone, anywhere in the world
    </p>
  );
};
