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
    <div className="flex-column h-screen w-screen p-12 bg-wp-dark">
      <div className="flex">
        <HeroCard/>
      </div>
      <div className="flex h-[40%] justify-between mt-10">
        <div className="flex justify-between items-center bg-white min-h-[100%] w-[30%] rounded-lg">
          <canvas id="chart-canvas"><GraphChart/></canvas>
        </div>
        <div className="bg-white min-h-[100%] w-[30%]" />
        <div className="p-4 bg-white min-h-[100%] w-[30%]">
          <h2 className=" font-poppins font-bold text-[18px]">BMI Calculator</h2>
            <BmiCalculator />
        </div>
      </div>
    </div>
    </>
  );
}
