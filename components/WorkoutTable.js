

function WorkoutTable(){
    return(
        <>
        <div className="rounded-lg overflow-x-auto w-[100%]">
            <table className="rounded-lg w-full md:py-4 shadow-neumorphicPressed border-separate table-fixed text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-slate-200 uppercase">
                    <tr>
                        <th scope="col" className="md:px-6 md:py-2 font-poppins">
                            Exercise
                        </th>
                        <th scope="col" className="md:px-6 md:py-2 font-poppins">
                            Weight
                        </th>
                        <th scope="col" className="md:px-6 md:py-2 font-poppins">
                            Sets
                        </th>
                        <th scope="col" className="md:px-6 md:py-2 font-poppins">
                            Reps
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="px-6 py-2 font-medium text-slate-200 font-poppins">
                            Bench Press
                        </td>
                        <td className="md:px-6 md:py-2">
                            <input type="text" placeholder="KG" className="p-2 w-[60%] font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="flex md:justify-center py-2">
                            <input type="text" placeholder="#" className="w-[60%] p-2 font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="py-2">
                            <div className="flex md:justify-center">
                                <input type="text" placeholder="#" className="w-[60%] p-2 font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b">
                        <th scope="row" className="px-6 py-2 font-medium text-slate-200 dark:text-white font-poppins">
                            Barbell Row
                        </th>
                        <td className="md:px-6 md:py-2">
                            <input type="text" placeholder="KG" className="p-2 w-[60%] font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="flex md:justify-center py-2">
                            <input type="text" placeholder="#" className="w-[60%] p-2 font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="py-2">
                            <div className="flex md:justify-center">
                                <input type="text" placeholder="#" className="w-[60%] p-2 font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                            </div>
                        </td>
                    </tr>
                    <tr className="dark:bg-gray-800">
                        <th scope="row" className="px-6 py-2 font-medium text-slate-200 dark:text-white font-poppins">
                            Overhead Press
                        </th>
                        <td className="md:px-6 md:py-2">
                            <input type="text" placeholder="KG" className="w-[60%] p-2 font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="flex md:justify-center py-2">
                            <input type="text" placeholder="#" className="w-[60%] p-2 font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="py-2">
                            <div className="flex md:justify-center">
                                <input type="text" placeholder="#" className="w-[60%] p-2 font-poppins text-[13px] shadow-inner rounded-xl border-[1px] border-slate-400 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default WorkoutTable;