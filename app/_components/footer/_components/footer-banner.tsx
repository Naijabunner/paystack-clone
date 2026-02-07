import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FooterBanner = () => {
    return (
        <div className=" banner pt-[50px] pb-[150px] relative">
            <Image
                src="https://paystack.com/assets/img/patterns/curved-pattern.png"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
                width={100}
                height={100}
            />
            <div className=" max-w-310 max-md:text-center mx-auto px-3 max-md:px-4 flex justify-between items-center max-md:flex-col max-md:gap-y-10 relative z-10 ">
                <div className=" max-w-150 space-y-5">
                    <p className="text-[clamp(16px,1.5vw,20px)] ">Try Paystack for free</p>
                    <h6 className=" text-[clamp(33px,4vw,48px)] leading-tight font-extrabold font-boing  ">Start accepting payments in just 30 minutes</h6>
                </div>
                <Button className=" bg-[#3BB75E] text-white text-base rounded-[5px] mr-5 h-12.5 font-semibold">
                    Create a free account
                </Button>
            </div>
        </div>
    );
};

export default FooterBanner;
