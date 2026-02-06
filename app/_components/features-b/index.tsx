import LinkUi from "@/components/link-ui";
import Image from "next/image";
import React from "react";
import ringVector from "@/public/assets/images/ring-vector.png";

const FeaturesB = () => {
  return (
    <section className="py-37.5 max-[1240px]:py-25 relative bg-[#e8f5fc]">
      <Image src="https://paystack.com/assets/img/patterns/checked-pattern-blue.png" className="w-full h-full absolute top-0 left-0 z-0 opacity-5" alt="" width={100} height={100} />
      <div className="container max-w-212.5 min-[1240px]:max-w-310 px-5 min-[580px]:px-14 mx-auto w-full text-secondary space-y-12.5 relative z-10 ">
        <header className=" max-w-160 space-y-5">
          <h2 className="text-h-3 max-[580px]:leading-10  min-[580px]:text-h-2 font-bold leading-12 font-segoe-ui ">
            Trusted by 200,000+ businesses
          </h2>
          <p className=" text-h-6 max-[580px]:text-body-l ">
            Thousands of organizations of all sizes trust Paystack to grow their business.
          </p>
        </header>
        <main className=" grid grid-cols-2 max-[580px]:grid-cols-1  min-[1240px]:grid-cols-3 gap-5">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="card flex-1 bg-background rounded-md font-segoe-ui border-[#F0F2F3] border shadow shadow-[#F0F2F3]  py-12 px-8 gap-y-2.5  h-full flex flex-col justify-between"
            >
              <div className=" space-y-2.5 ">
                <div className="w-25 h-25 -mt-2.5">
                <Image src="https://assets.paystack.com/assets/img/content/For-International-Businesses_180823_165939.svg" className="w-full h-full" alt="" width={100} height={100} />
                </div>
                <p className=" text-[24px] font-bold leading-7 max-w-[70%] pb-1.25 ">
                  Paystack for Global Brands
                </p>
                <p className=" text-body-m leading-relaxed">
                  We help global brands accept payments from across Africa
                </p>
              </div>

              <LinkUi href="/"> Api Refrence</LinkUi>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default FeaturesB;
