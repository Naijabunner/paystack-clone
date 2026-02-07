import React from "react";
import { AnimateYAndOpacity } from "../animations";

const HeroDescription = () => {
    return (
        <AnimateYAndOpacity delay="0.7s">
            <p className=" text-[clamp(16px,2vw,20px)] line-clamp-4 ">
                Paystack helps businesses in Africa get paid by anyone, anywhere in the world
            </p>
        </AnimateYAndOpacity>
    );
};

export default HeroDescription;
