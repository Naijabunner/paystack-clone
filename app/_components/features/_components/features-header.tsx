import React from "react";

const FeaturesHeader = () => {
    return (
        <header className=" space-y-3 max-w-5xl min-[580px]:w-[60%]">
            <h2 className=" text-[clamp(33px,3vw,45px)] font-extrabold font-boing leading-tight  ">
                Simple, easy payments
            </h2>
            <span className="text-[clamp(16px,1.5vw,20px)] ">{`Building a business is hard. Getting paid shouldn't be.`}</span>
        </header>
    );
};

export default FeaturesHeader;
