

function WorkoutTable(){
    return(
        <>
        <div className="relative shadow-lg rounded-lg shadow-slate-500 overflow-x-auto">
            <table className="rounded-lg border border-separate border-tools-table-outline border-1w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Exercise
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Weight
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sets
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Reps
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium text-gray-900">
                            Bench Press
                        </td>
                        <td className="px-6 py-4">
                            <input type="text" placeholder="KG" className="p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="flex justify-center py-4">
                            <input type="text" placeholder="#" className="w-[50%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="py-4">
                            <div className="flex justify-center">
                                <input type="text" placeholder="#" className="w-[50%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                            Barbell Row
                        </th>
                        <td className="px-6 py-4">
                            <input type="text" placeholder="KG" className="p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="flex justify-center py-4">
                            <input type="text" placeholder="#" className="w-[50%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="py-4">
                            <div className="flex justify-center">
                                <input type="text" placeholder="#" className="w-[50%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                            Overhead Press
                        </th>
                        <td className="px-6 py-4">
                            <input type="text" placeholder="KG" className="p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="flex justify-center py-4">
                            <input type="text" placeholder="#" className="w-[50%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
                        </td>
                        <td className="py-4">
                            <div className="flex justify-center">
                                <input type="text" placeholder="#" className="w-[50%] p-2 shadow-inner border-[1px] border-slate-200 shadow-slate-200 placeholder:text-right focus:outline-none focus:shadow-slate-400"></input>
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