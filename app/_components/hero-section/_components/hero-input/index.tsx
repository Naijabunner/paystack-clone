"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HeroInput = () => {
  return (
    <div className="">
      <Button className="  bg-[#3BB75E] text-white text-base rounded-[5px] mr-5  h-12.5 font-semibold">Create a free account</Button>
      <Link href="" className="text-[15px] text-primary font-medium">or Contact Sales</Link>
    </div>
  );
};

export default HeroInput;