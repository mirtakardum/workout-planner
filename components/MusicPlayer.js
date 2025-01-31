import { useState, useRef } from "react";

function MusicPlayer(){

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    function toggleAudio() {

        if(isPlaying){
            audioRef.current.pause();
        }
        else{
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);    
    };

    const handleVolumeChange = (e) => {
        audioRef.current.volume = e.target.value;
      };

    return(
    <>
    <div className="flex flex-col items-center">
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        defaultValue="0.5"
        onChange={handleVolumeChange}
        className="w-[60%] h-1 bg-gray-200 rounded-lg cursor-pointer accent-accentOrange"
      />
    <button onClick={toggleAudio} type="button" className="w-[12%] mt-5 text-white bg-accentOrange shadow-neumorphicButton focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <img
            src={isPlaying ? "/pause.png" : "/play.png"}
            alt={isPlaying ? "Pause" : "Play"}
            className="w-5 h-5"
        />
    </button>
    <audio ref={audioRef} src="/I Ain't Mad At Cha.mp3"></audio>
    </div>

    </>
    )
}

export default MusicPlayer;