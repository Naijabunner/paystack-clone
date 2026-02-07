"use client";
import React from "react";
import HeroContentLeft from "./_components/hero-content-left";
import HeroContentRight from "./_components/hero-content-right";
import HeroBackgroundMap from "./_components/hero-background-map";

/**
 * Hero Section
 */
const HeroSection = () => {
  return (
    <section className="flex flex-col bg-[#f2fff4] relative overflow-hidden">
      <main className="flex flex-col max-xl:p-10 max-xl:pt-25 max-md:pt-40 max-md:pb-25 px-3 max-md:px-4 justify-between pb-0 min-h-fit h-full md:h-screen max-h-195 w-full max-w-310 mx-auto">
        <HeroContentLeft />
        <HeroContentRight />
      </main>
      <HeroBackgroundMap />
    </section>
  );
};

export default HeroSection;
