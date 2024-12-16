'use client';

import WorkoutTable from "@/components/WorkoutTable";
import Image from "next/image";
import { useEffect } from "react";
import HeroCard from "@/components/HeroCard";
import GraphChart from "@/components/GraphChart";
import Chart from 'chart.js/auto'

export default function Home() {

  useEffect(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const ctx = document.getElementById('chart-canvas');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <>
    <div className="flex-column h-screen w-screen p-12 bg-wp-dark">
      <div className="flex">
        <HeroCard/>
      </div>
      <div className="flex h-[40%] justify-between mt-10">
        <div className="bg-white min-h-[100%] w-[30%] rounded-lg">
          <canvas id="chart-canvas"></canvas>
        </div>
        <div className="bg-white min-h-[100%] w-[30%]" />
        <div className="bg-white min-h-[100%] w-[30%]" />
      </div>
    </div>
    </>
  );
}
