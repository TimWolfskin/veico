"use client";

import Image from "next/image";

import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-48 padding-x">
        <h1 className="hero__title">
          Find, book, and rental car in <span className="text-primary-blue">Easy</span> steps.
        </h1>

        <p className="hero__subtitle">
          Get a car wherever and whenever you need it with your IOS or android device
        </p>
        <div className="flex gap-10 mt-10">
        <Image
          src='/ios.svg'
          alt='ios'
          width={168}
          height={50}
          className='object-contain'
        />
        <Image
          src='/android.svg'
          alt='android'
          width={168}
          height={50}
          className='object-contain'
        />
        </div>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-[#151515] rounded-lg text-white  mt-10"
          handleClick={handleScroll}
          textStyles="py-6  text-4xl font-bold w-[430px]"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
