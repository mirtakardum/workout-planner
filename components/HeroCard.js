import Image from "next/image";
import WorkoutTable from "./WorkoutTable";


function HeroCard() {
    return(
        <>
        <div className="grid grid-cols-60/40 w-full gap-2 p-6 bg-white border border-gray-200 rounded-lg">
            <div className="w-full">
                <div>
                    <h1 className="font-nunito font-extrabold text-[40px]">Welcome back, Mirta!</h1>
                    <h2 className="font-poppins text-[25px] pt-2 ">Today is upper day, are you ready?</h2>
                </div>
                <div>
                    <h1 className="font-poppins text-[18px] pt-2">Suggested playlist of the day:</h1>
                    <div className="flex items-end gap-2">
                        <Image src="/playlistcover1.jpg" width={100} height={100} alt="Playlist cover"/>
                        <h2 className="font-poppins text-[18px]">90s Rap/90s Hiphop</h2>
                    </div>
                </div>
            </div>
            <WorkoutTable />
        </div>

        </>
    )
} 

export default HeroCard;

