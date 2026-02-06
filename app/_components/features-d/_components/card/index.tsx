import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import testPersonImg from "@/public/assets/images/test-person.jpg";

interface FeatureCardProps {
    logo?: string;
    quote: string;
    url: ReactNode;
    author: {
        name: string;
        role: string;
        image?: string;
    };
}

const FeatureCard = ({ quote, author, url }: FeatureCardProps) => {
    return (
        <div className="card flex-1 bg-background rounded-md font-segoe-ui border-[#F0F2F3] border shadow shadow-[#F0F2F3] py-12 px-8 gap-y-7 min-h-87.5 h-full flex flex-col justify-between">
            <div className="space-y-8">
                {/* <SingleLogo /> */}
                {url}
                <p className=" text-body-m leading-relaxed">{quote}</p>
            </div>
            <div className=" flex items-center gap-2">
                <div className="size-12.5 rounded-full overflow-hidden">
                    <img
                        src={author.image}
                        alt={author.name}
                        width={50}
                        height={50}
                        className="w-full object-fill relative"
                    />
                </div>

                <p className="text flex flex-col text-body-l font-semibold  flex-1 ">
                    {author.name}
                    <span className="text-[13px] font-normal ">{author.role}</span>
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;
