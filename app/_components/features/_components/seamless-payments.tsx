import React from "react";
import Image from "next/image";
import AnimatedGif from "@/public/assets/gifs/Collect-Payments-for-Multiple-Channels.gif";
import FeatureListItem from "@/components/feature-list-item";
import LinkUi from "@/components/link-ui";

const someFeatures = [
    "Card",
    "Bank Account",
    "Bank Transfer",
    "USSD",
    "Apple Pay",
    "Visa QR",
    "Mobile Money",
    "POS",
];

const SeamlessPayments = () => {
    return (
        <div className="features_section_a flex max-[1240px]:flex-col justify-between gap-10 min-[580px]:gap-20 ">
            <div className="left-section flex-1 ">
                <Image src={AnimatedGif} alt="animated payments" className="  " />
            </div>
            <div className="right-section flex-1 flex flex-col gap-y-20 max-w-125 ">
                <div className="top space-y-4.75">
                    <h3 className=" text-[clamp(26px,2.5vw,36px)] leading-7 font-bold  min-[580px]:leading-11 pb-1.25">
                        Delight customers with a seamless payments experience
                    </h3>
                    <p className=" text-[clamp(16px,1.5vw,19px)] leading-normal ">
                        Give your customers the gift of modern, frictionless, painless payments. Integrate
                        Paystack once and let your customers pay you however they want.
                    </p>
                    <ul className=" grid min-[580px]:grid-cols-2 gap-3">
                        {someFeatures.map((method) => (
                            <FeatureListItem key={method} iconPosition="center">
                                {method}
                            </FeatureListItem>
                        ))}
                    </ul>
                </div>
                <div className=" space-y-4.75 bottom">
                    <p className=" text-[clamp(26px,2.5vw,36px)] leading-7 font-bold  min-[580px]:leading-11 pb-1.25 ">
                        Enjoy phenomenal transaction success rates
                    </p>
                    <p className=" text-[clamp(16px,1.5vw,19px)] leading-normal ">
                        We automatically route payments through the most optimal channels, ensuring the highest
                        transaction success rates in the market.
                    </p>
                    <LinkUi href="/">Find out how we achieve high success rates</LinkUi>
                </div>
            </div>
        </div>
    );
};

export default SeamlessPayments;
