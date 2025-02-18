import Image from "next/image";
import WorkoutTable from "./WorkoutTable";
import MusicPlayer from "./MusicPlayer";


function HeroCard() {
    return(
        <>
        <div className="grid md:grid-cols-60/40 grid-cols-1 w-full md:p-8 bg-wp-dark shadow-neumorphism rounded-lg">
            <div className="w-full flex flex-col p-8 gap-[20px] md:p-0 justify-between">
                <div>
                    <h1 className="font-nunito font-extrabold md:text-[40px] text-[25px] text-slate-200">Welcome back, Mirta!</h1>
                    <h2 className="font-poppins md:text-[25px] text-[18px] pt-2 text-slate-200">Today is upper day, are you ready?</h2>
                    <h1 className="font-poppins md:text-[18px] text-[15px] pt-2 text-slate-200">Suggested playlist of the day:</h1>
                </div>
                <div className="grid md:grid-cols-60/40 grid-cols-40/60">
                    <div className="flex flex-col gap-2">
                        <div className="flex">
                            <Image src="/playlistcover1.jpg" width={80} height={80} alt="Playlist cover"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px] items-center">
                        <MusicPlayer/>
                        <h2 className="font-poppins md:text-[18px] text-[15px] text-slate-200">90s Rap/90s Hiphop</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-between">
                <h2 className="font-poppins md:text-[25px] text-[18px] text-slate-200">Here's what you're doing today!</h2>
                <WorkoutTable />
            </div>
        </div>

        </>
    )
} 

export default HeroCard;

