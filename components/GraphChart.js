'use client';

import Chart from 'chart.js/auto'
import { useEffect } from "react";


function GraphChart() {
    useEffect(() => {
        const data = [
        { date: 2010, weight: 10 },
        { date: 2011, weight: 20 },
        { date: 2012, weight: 15 },
        { date: 2013, weight: 25 },
        { date: 2014, weight: 22 },
        { date: 2015, weight: 30 },
        { date: 2016, weight: 28 },
        ];

        const ctx = document.getElementById('chart-canvas');
        if (ctx) {
        return(
        new Chart(ctx, {
            type: 'line',
            data: {
            labels: data.map((row) => row.date),
            datasets: [
                {
                data: data.map((row) => row.weight),
                backgroundColor: '#f7f7f7',
                borderColor: '#050505',
                borderWidth: 1.5,
                },
            ],
            },
            options: {
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                y: {
                beginAtZero: true,
                title: {
                    display: true,
                    align: 'center',
                    text: 'weight',
                    color: 'black',
                    font: {
                        family: 'poppins',
                        size: 12,
                    }
                }
                },
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        align: 'center',
                        text: 'months',
                        color: 'black',
                        font: {
                            family: 'poppins',
                            size: 12,
                        }
                    }
                    },
            },
            },
        }));
        };
  }, []);
}

export default GraphChart;