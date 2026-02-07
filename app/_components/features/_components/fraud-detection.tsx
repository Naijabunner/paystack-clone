import React from "react";

const FraudDetection = () => {
    return (
        <div className="features_section_c grid max-lg:grid-cols-1 grid-cols-2  justify-between  max-[1240px]:flex-col min-[1240px]:items-end gap-20 ">
            <div className="left-section flex-1 rounded-2xl bg-amber-300 h-full relative overflow-hidden">
                <video
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="right-section flex-1 space-y-20 max-w-125 ">
                <div className="top space-y-4.75   ">
                    <h3 className=" text-[clamp(26px,2.5vw,36px)] leading-7 font-bold  min-[580px]:leading-11 pb-1.25">
                        Protect yourself and your customers with advanced fraud detection
                    </h3>
                    <p className=" text-[clamp(16px,1.5vw,19px)]  leading-normal ">
                        Paystack’s combination of automated and manual fraud systems protect you from fraudulent
                        transactions and associated chargeback claims.
                    </p>
                </div>
                <div className="bottom space-y-4.75 ">
                    <h3 className=" text-[clamp(26px,2.5vw,36px)] leading-8  min-[580px]:leading-11 font-bold">
                        Detailed reporting for accounting, reconciliation, and audits
                    </h3>
                    <p className=" text-[clamp(16px,1.5vw,19px)] leading-normal ">
                        Understand your customers’ purchase patterns and do easy reconciliations with a robust
                        data Dashboard and easy exports.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FraudDetection;
