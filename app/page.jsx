"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React from "react";
import Photos from "@/components/Photos";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { LampDemo } from "@/components/ui/lamp";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/HariomCV.pdf";
    link.download = "HariomCV.pdf";
    link.click();
  };

  return (
    <section className="min-h-fit flex flex-col justify-between ">
      <div className="container mx-auto flex-1 pb-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4">
          {/* Data */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <LampDemo />

            {/* Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-5">
              <Button
                variant="outline"
                size="lg"
                className="flex uppercase items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                   justify-center items-center text-accent text-base hover:bg-accent hover:text-primary 
                   hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
