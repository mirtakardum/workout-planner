'use client';

import WorkoutTable from "@/components/WorkoutTable";
import Image from "next/image";
import HeroCard from "@/components/HeroCard";
import GraphChart from "@/components/GraphChart";
import BmiCalculator from "@/components/BmiCalculator";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
 
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
    <div className="flex flex-col gap-[20px] min-h-screen md:h-screen w-screen px-[3%] py-[20px] bg-wp-dark">
      <div className="flex min-h-[50%] shadow-[0.625rem_0.625rem_0.875rem_0_rgb(255, 255, 255),-0.5rem_-0.5rem_1.125rem_0_rgb(255, 255, 255)]">
        <HeroCard/>
      </div>
      <div className="flex flex-col mx-auto md:hidden w-[100%]">
      <Slider {...settings}>
        <div className="flex items-center bg-wp-dark shadow-neumorphism min-h-[100%] rounded-lg">
          <GraphChart canvasId="lift-canvas"/>
        </div>
        <div className="flex items-center bg-wp-dark shadow-neumorphism min-h-[100%] rounded-lg">
          <GraphChart canvasId="weight-canvas"/>
        </div>
        <div className="flex flex-col justify-between h-full bg-wp-dark shadow-neumorphism rounded-lg">
          <h2 className=" font-poppins font-bold text-[25px] text-slate-200">BMI Calculator</h2>
          <BmiCalculator />
        </div>
        </Slider>
      </div>
      <div className="hidden md:grid md:grid-cols-3 md:gap-[20px] md:h-[50%]">
      <div className="flex items-center bg-wp-dark shadow-neumorphism min-h-[100%] rounded-lg">
          <GraphChart canvasId="lift-canvas"/>
        </div>
        <div className="flex items-center bg-wp-dark shadow-neumorphism min-h-[100%] rounded-lg">
          <GraphChart canvasId="weight-canvas"/>
        </div>
        <div className="flex flex-col justify-between p-4 bg-wp-dark shadow-neumorphism rounded-lg">
          <h2 className=" font-poppins font-bold text-[25px] text-slate-200">BMI Calculator</h2>
          <BmiCalculator />
        </div>
      </div>
    </div>
    </>
  );
}
