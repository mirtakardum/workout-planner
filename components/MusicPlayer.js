"use client";

import { useState, useRef, useEffect } from "react";

function MusicPlayer(){

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const progressRef = useRef(null);
    const animationRef = useRef(null);


    const updateProgress = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);

            animationRef.current = requestAnimationFrame(updateProgress);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            animationRef.current = requestAnimationFrame(updateProgress); 
        } else {
            audioRef.current.pause();
            setDuration(audioRef.current.duration);
            cancelAnimationFrame(animationRef.current); 
        }
        
        return () => cancelAnimationFrame(animationRef.current); 
    }, [isPlaying]);
    

    const handleVolumeChange = (e) => {
        audioRef.current.volume = e.target.value;
    };
    
/*   
        PROBABLY NOT NEEDED
        const handleLoadedMetadata = (e) => {
        setDuration(audioRef.current.duration);
        console.log("Audio Duration:", audioRef.current.duration);
    };*/
    
    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
      };

    return(
    <>
    <div className="flex flex-col gap-[10px]">
        <div className="flex items-center justify-end gap-2">
            <span className="text-sm text-accentOrange">{formatTime(currentTime)}</span>
            <input
            ref={progressRef}
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-[55%] h-1 bg-gray-200 rounded-lg cursor-pointer accent-accentOrange"
            />
            <span className="text-sm text-accentOrange">- {formatTime(duration - currentTime)}</span>
        </div>
        <div className="flex items-center justify-end gap-[10px]">
            <button onClick={() => setIsPlaying(!isPlaying) } type="button" className=" text-white bg-accentOrange shadow-neumorphicButton focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <img
                    src={isPlaying ? "/pause.png" : "/play.png"}
                    alt={isPlaying ? "Pause" : "Play"}
                    className="w-3 h-3"
                />
            </button>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                defaultValue="0.5"
                onChange={handleVolumeChange}
                className="w-[30%] h-1 bg-gray-200 rounded-lg cursor-pointer accent-accentOrange"
            />
        </div>
    <audio ref={audioRef} src="/I Ain't Mad At Cha.mp3"></audio>
    </div>
    </>
    )
}

export default MusicPlayer;