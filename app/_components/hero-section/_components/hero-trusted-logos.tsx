import Image from "next/image";
import React from "react";

const HeroTrustedLogos = () => {
    return (
        <div className=" w-fit space-y-5 h-fit  ">
            <p className=" max-xsmall:text-xs max-sm:text-sm  font-medium text-base  px-0 mx-0  ">
                Trusted by over 200,000 business
            </p>
            <div className="flex gap-x-2 max-md:items-start">
                <Image
                    unoptimized
                    src="https://assets.paystack.com/assets/img/logos/merchants/Dominos-Plain.svg"
                    width={100}
                    height={100}
                    alt=""
                    className="object-contain max-h-[19px] max-md:max-w-[70px]  md:max-h-[29px]"
                />
                <Image
                    unoptimized
                    src="https://assets.paystack.com/assets/img/logos/merchants/mtn-group-grayscale.svg"
                    width={100}
                    height={100}
                    alt=""
                    className="object-contain max-h-[19px] max-md:max-w-[70px]  md:max-h-[29px]"
                />
                <Image
                    unoptimized
                    src="https://assets.paystack.com/assets/img/logos/merchants/Bolt-Stack-Blue_200304_153027.svg"
                    width={100}
                    height={100}
                    alt=""
                    className="object-contain max-h-[19px] max-md:max-w-[70px]  md:max-h-[29px]"
                />
                <Image
                    unoptimized
                    src="https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg"
                    width={100}
                    height={100}
                    alt=""
                    className="object-contain max-h-[19px] max-md:max-w-[70px]  md:max-h-[29px]"
                />
            </div>
        </div>
    );
};

export default HeroTrustedLogos;
