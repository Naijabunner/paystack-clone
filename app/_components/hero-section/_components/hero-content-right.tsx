import React from "react";
import HeroTrustedLogos from "./hero-trusted-logos";
import HeroVideoTrigger from "./hero-video-trigger";

const HeroContentRight = () => {
    return (
        <div className="relative flex justify-between max-md:mt-16 max-md:flex-col w-full md:items-center md:pb-10">
            <HeroTrustedLogos />
            <hr className="w-full md:hidden pb-10 border-gray-200 mt-10" />
            <HeroVideoTrigger />
        </div>
    );
};

export default HeroContentRight;
