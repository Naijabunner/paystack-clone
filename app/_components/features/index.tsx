import React from "react";
import FeaturesHeader from "./_components/features-header";
import SeamlessPayments from "./_components/seamless-payments";
import CustomPayments from "./_components/custom-payments";
import FraudDetection from "./_components/fraud-detection";

const Features = () => {
  return (
    <section className=" py-25  min-[1240px]:py-37.5 ">
      <div className="container  max-w-212.5 min-[1240px]:max-w-310 px-4 min-[580px]:px- mx-auto w-full text-secondary space-y-16  min-[580px]:space-y-32">
        <FeaturesHeader />
        <main className="space-y-12.5  min-[1240px]:space-y-50">
          <SeamlessPayments />
          <CustomPayments />
          <FraudDetection />
        </main>
      </div>
    </section>
  );
};

export default Features;
