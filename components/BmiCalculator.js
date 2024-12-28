'useClient'
import { useState, useEffect, useRef } from "react";


function BmiCalculator(){

    const [progressBar, setProgressBar] = useState(null)
    const [progressBarWidth, setProgressBarWidth] = useState(0)

    //The first useEffect is called so that all the functions know which div (progress-bar) to target
    useEffect(() => {
        setProgressBar(document.getElementById("progress-bar"))
    }, [])

    //The second useEffect is called when the progressBarWidth changes, so that the updateProgressBar will always happen
    //after there has been a change to the width
    useEffect(() => {
        if(progressBarWidth != 0){
            updateProgressBar()
        }
    }, [progressBarWidth])

    const [bmi, setBmi] = useState(0)
    
    function calculateBMI(){
        const weight = parseFloat(document.getElementById("weight-input").value);
        const height = parseFloat(document.getElementById("height-input").value) / 100;
        setBmi((weight / (height * height)).toFixed(2))
        setProgressBarWidth(Math.min(bmi * 2, 100))
    }

    function updateProgressBar(){
        if (bmi >= 30) {
            progressBar.style.backgroundColor = "#ff0000"; // Set progress bar to red for high BMI
          } 
          else if (bmi < 18.5){
              progressBar.style.backgroundColor = "#FFF62F"; //Set progress bar to yellow for low BMI
          }
          else {
            progressBar.style.backgroundColor = "#4caf50"; // Set progress bar to green for normal BMI
          }
        progressBar.style.width = `${progressBarWidth}%`;
    }


    return(
        <>
        <div className="grid grid-cols-2">
            <div className="w-[100%] flex flex-col">
                <label for="weight-input" className="font-poppins text-[12px]">Weight (kg):</label>
                <input type="number" placeholder="KG" id="weight-input" className="w-[40%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                <label for="height-input" className="font-poppins text-[12px]">Height (cm):</label>
                <input type="number" placeholder="CM" id="height-input" className="w-[40%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2" onClick={calculateBMI}>Calculate</button>
            </div>
            <div className="w-[100%] flex flex-col items-center">
                {bmi != 0 &&
                    <p>{bmi}</p>
                }
                    <div className="w-[80%] border-2 border-slate-700 rounded-full overflow-hidden">
                        <div id="progress-bar" className="h-6"/>
                    </div>
            </div>
        </div>
        </>
    )
}

export default BmiCalculator