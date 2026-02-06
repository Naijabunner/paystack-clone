import React from "react";
import Image from "next/image";
import FeatureListItem from "@/components/feature-list-item";
import LinkUi from "@/components/link-ui";

const apiFeatures = [
    "Collect one-time and recurring payments from your app or website",
    "Make instant transfers",
    "Retrieve all your transaction and customer data",
    "Verify the identity of customers",
];

const CustomPayments = () => {
    return (
        <div className="features_section_b flex justify-between items-end gap-20  max-[1240px]:flex-col-reverse ">
            <div className="left-section flex-1">
                <div className="top space-y-4.75">
                    <h3 className=" text-3xl min-[580px]:text-h-3 leading-7 font-bold  min-[580px]:leading-11 pb-1.25">
                        Build custom payments experiences with well-documented APIs
                    </h3>
                    <p className=" max-[580px]:text-body-m text-[19px] leading-normal ">
                        Developers love our thorough, well-documented APIs that let you to build everything from
                        simple weekend projects, to complex financial products serving hundreds of thousands of
                        customers. If you can imagine it, you can build it with Paystack.
                    </p>
                    <ul className=" grid  gap-3">
                        {apiFeatures.map((method) => (
                            <FeatureListItem key={method} iconPosition="center">
                                {method}
                            </FeatureListItem>
                        ))}
                    </ul>
                    <LinkUi href="."> Api Refrence</LinkUi>
                </div>
            </div>
            <div className="right-section flex-1 ">
                <Image src="https://assets.paystack.com/assets/img/content/_400x357_crop_center-center_82_line/Robust-Suite-of-APIs-Opt.png" alt="animated" width={400} height={357} />
            </div>
        </div>
    );
};

export default CustomPayments;
