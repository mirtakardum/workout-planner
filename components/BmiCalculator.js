'useClient'
import { useState } from "react";


function BmiCalculator(){

    const [bmi, setBmi] = useState(0)

    function calculateBMI(){
        const weight = parseFloat(document.getElementById("weight-input").value);
        const height = parseFloat(document.getElementById("height-input").value) / 100;

        setBmi((weight / (height * height)).toFixed(2))
    }

    const progressBar = document.getElementById("progress-bar")
    const progressBarWidth = Math.min(bmi * 2, 100);


    return(
        <>
        <div className="flex">
            <div className="flex flex-col">
                <label for="weight-input" className="font-poppins text-[12px]">Weight (kg):</label>
                <input type="number" placeholder="KG" id="weight-input" className="w-[40%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                <label for="height-input" className="font-poppins text-[12px]">Height (cm):</label>
                <input type="number" placeholder="CM" id="height-input" className="w-[40%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                <button type="button" className="w-[40%] text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2" onClick={calculateBMI}>Calculate</button>
            </div>
            <div>
                {bmi != 0 &&
                <p>{bmi}</p>
                }
                <div id="progress-bar"/>
            </div>
        </div>
        </>
    )
}

export default BmiCalculator