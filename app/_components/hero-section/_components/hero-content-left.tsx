import React from "react";
import HeroHeader from "./hero-header";
import HeroDescription from "./hero-description";
import HeroInput from "./hero-input";

const HeroContentLeft = () => {
    return (
        <div className="flex-1 pt-20 flex flex-col gap-3 justify-center w-full max-w-140 relative z-40">
            <HeroHeader />
            <HeroDescription />
            <HeroInput />
        </div>
    );
};

export default HeroContentLeft;
