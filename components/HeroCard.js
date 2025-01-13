import Image from "next/image";
import WorkoutTable from "./WorkoutTable";
import MusicPlayer from "./MusicPlayer";


function HeroCard() {
    return(
        <>
        <div className="grid grid-cols-60/40 w-full p-8 bg-wp-dark shadow-neumorphism rounded-lg">
            <div className="w-full flex flex-col justify-between">
                <div>
                    <h1 className="font-nunito font-extrabold text-[40px] text-slate-200">Welcome back, Mirta!</h1>
                    <h2 className="font-poppins text-[25px] pt-2 text-slate-200">Today is upper day, are you ready?</h2>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-poppins text-[18px] pt-2 text-slate-200">Suggested playlist of the day:</h1>
                    <div className="flex items-end gap-2">
                        <Image src="/playlistcover1.jpg" width={80} height={80} alt="Playlist cover"/>
                        <h2 className="font-poppins text-[18px] text-slate-200">90s Rap/90s Hiphop</h2>
                    </div>
                    <MusicPlayer/>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between">
                <h2 className="font-poppins text-[25px] text-slate-200">Here's what you're doing today!</h2>
                <WorkoutTable />
            </div>
        </div>

        </>
    )
} 

export default HeroCard;

