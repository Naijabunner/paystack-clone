import React from "react";
import FeatureHeader from "./_components/header";
import FeatureCard from "./_components/card";
import Image from "next/image";

const FEATURES_DATA = [
  {
    id: 1,
    logo: <div className="w-16.75 h-7 relative">
      <Image
        src="https://assets.paystack.com/assets/img/logos/merchants/_300x124_crop_center-center_60_line/Stripe.png"
        alt="Stripe"
        width={100}
        height={100}  
        className="object-contain"
      />
    </div>,
    quote: "Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    author: {
      name: "Patrick Collison",
      role: "CEO, Stripe",
      image: "https://assets.paystack.com/ assets/img/testimonial-authors/_400x400_crop_center-center_82_line/patrick-collison-headshot.jpg",
    },
  },
  {
    id: 2,
    logo: <div className="w-16.75 h-7 relative">
      <Image
        src="https://assets.paystack.com/assets/img/logos/merchants/_400x127_crop_center-center_82_line/Visa-_-Color.png"
        alt="Stripe"
        width={100}
        height={100}      
        className="object-contain"
      />
    </div>,
    quote: "Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem",
    author: {
      name: "Otto Williams",
      role: "Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa",
      image: "https://assets.paystack.com/ assets/img/testimonial-authors/_200x200_crop_center-center_line/otto-williams.jpeg"
    },
  },
  {
    id: 3,
    logo:
     <div className="size-8 relative">
      <Image
        src="https://assets.paystack.com/assets/img/logos/merchants/_257x257_crop_center-center_line/ycombinator-logo.png"
        alt="Stripe"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>,
    quote: "As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent.",
    author: {
      name: "Michael Seibel",
      role: "CEO, Partner, Y Combinator",
      image: "https://assets.paystack.com/ assets/img/testimonial-authors/_400x400_crop_center-center_82_line/michael-siebel-headshot.jpeg"
    },
  },
];
const FeaturesD = () => {
  return (
    <section className="py-[150px] bg-primary-foreground max-[580px]:py-[100px] relative">
      <Image src="https://paystack.com/assets/img/patterns/circular-pattern.png" alt="" className="absolute top-0 -right-60  w-[700px] h-[700px] grayscale opacity-50 z-10   " width={100} height={100} />
      <div className="container z-20 relative max-[580px]:px-5 px-14 mx-auto w-full text-secondary space-y-[50px] max-w-[850px] min-[1260px]:max-w-[1340px]">
        <FeatureHeader />
        <main className="grid grid-cols-2 min-[1260px]:grid-cols-3 gap-5 max-[580px]:grid-cols-1">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard
              key={feature.id}
              quote={feature.quote}
              author={feature.author}
                url={feature.logo}
            />
          ))}
        </main>
      </div>
    </section>
  );
};

export default FeaturesD;

