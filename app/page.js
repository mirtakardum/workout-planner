'use client';

import WorkoutTable from "@/components/WorkoutTable";
import Image from "next/image";
import { useEffect } from "react";
import HeroCard from "@/components/HeroCard";
import GraphChart from "@/components/GraphChart";
import Chart from 'chart.js/auto'
import BmiCalculator from "@/components/BmiCalculator";

export default function Home() {


  return (
    <>
    <div className="flex flex-col gap-[20px] h-screen w-screen px-[3%] py-[20px] bg-wp-dark">
      <div className="flex h-[50%] shadow-[0.625rem_0.625rem_0.875rem_0_rgb(255, 255, 255),-0.5rem_-0.5rem_1.125rem_0_rgb(255, 255, 255)]">
        <HeroCard/>
      </div>
      <div className="grid grid-cols-3 gap-[20px] h-[50%]">
        <div className="flex items-center bg-wp-dark shadow-neumorphism min-h-[100%] rounded-lg">
          <canvas id="lift-canvas"><GraphChart canvasId="lift-canvas"/></canvas>
        </div>
        <div className="flex items-center bg-wp-dark shadow-neumorphism min-h-[100%] rounded-lg">
          <canvas id="weight-canvas"><GraphChart canvasId="weight-canvas"/></canvas>
        </div>
        <div className="flex flex-col justify-between p-4 bg-white bg-wp-dark shadow-neumorphism rounded-lg">
          <h2 className=" font-poppins font-bold text-[25px] text-slate-200">BMI Calculator</h2>
            <BmiCalculator />
        </div>
      </div>
    </div>
    </>
  );
}
