import React from "react";
import { AnimateYAndOpacity } from "../animations";

const HeroHeader = () => {
    return (
        <AnimateYAndOpacity delay="0.4s">
            <h1 className=" text-[clamp(33px,4vw,48px)] leading-tight font-extrabold font-boing  ">
                Modern online and offline payments for Africa
            </h1>
        </AnimateYAndOpacity>
    );
};

export default HeroHeader;
