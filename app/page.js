import WorkoutTable from "@/components/WorkoutTable";
import Image from "next/image";
import HeroCard from "@/components/HeroCard";

export default function Home() {
  return (
    <div className="flex-column h-screen w-screen p-12 bg-wp-dark">
      <div className="flex gap-[20px]">
        <HeroCard/>
        <div className="bg-white" />
      </div>
    </div>
  );
}
