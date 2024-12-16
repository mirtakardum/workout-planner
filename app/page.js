import WorkoutTable from "@/components/WorkoutTable";
import Image from "next/image";
import HeroCard from "@/components/HeroCard";

export default function Home() {
  return (
    <>
    <div className="flex-column h-screen w-screen p-12 bg-wp-dark">
      <div className="flex">
        <HeroCard/>
      </div>
      <div className="flex h-[40%] justify-between mt-10">
        <div className="bg-white min-h-[100%] w-[30%]" />
        <div className="bg-white min-h-[100%] w-[30%]" />
        <div className="bg-white min-h-[100%] w-[30%]" />
      </div>
    </div>
    </>
  );
}
