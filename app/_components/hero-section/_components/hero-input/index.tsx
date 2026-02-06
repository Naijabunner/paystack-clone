"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HeroInput = () => {
  return (
    <div className="">
      <Button> Create a free account</Button>
      <Link href="">or Contact Sales</Link>
    </div>
  );
};

export default HeroInput;