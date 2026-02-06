import React from "react";

const FeaturesHeader = () => {
    return (
        <header className=" space-y-5 max-w-5xl min-[580px]:w-[60%]">
            <h2 className="text-h-3 max-[580px]:leading-10  min-[580px]:text-h-2 font-bold leading-12  ">
                Simple, easy payments
            </h2>
            <span className=" text-h-6 max-[580px]:text-body-l ">{`Building a business is hard. Getting paid shouldn't be.`}</span>
        </header>
    );
};

export default FeaturesHeader;
