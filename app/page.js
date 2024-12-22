'use client';

import WorkoutTable from "@/components/WorkoutTable";
import Image from "next/image";
import { useEffect } from "react";
import HeroCard from "@/components/HeroCard";
import GraphChart from "@/components/GraphChart";
import Chart from 'chart.js/auto'

export default function Home() {


  return (
    <>
    <div className="flex-column h-screen w-screen p-12 bg-wp-dark">
      <div className="flex">
        <HeroCard/>
      </div>
      <div className="flex h-[40%] justify-between mt-10">
        <div className="flex justify-between items-center bg-white min-h-[100%] w-[30%] rounded-lg">
          <canvas id="lift-canvas"><GraphChart canvasId="lift-canvas"/></canvas>
        </div>
        <div className="flex justify-between items-center bg-white min-h-[100%] w-[30%] rounded-lg">
          <canvas id="weight-canvas"><GraphChart canvasId="weight-canvas"/></canvas>
        </div>
        <div className="bg-white min-h-[100%] w-[30%]" />
      </div>
    </div>
    </>
  );
}
