

function BmiCalculator(){
    return(
        <>
        <div className="flex flex-col">
            <label for="weight-input" className="font-poppins text-[12px]">Weight (kg):</label>
            <input type="text" placeholder="KG" id="weight-input" className="w-[40%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
        </div>
        </>
    )
}

export default BmiCalculator