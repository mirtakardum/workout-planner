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
    }

    return(
    <>
    <button onClick={toggleAudio} type="button" class="text-white bg-wp-dark shadow-neumorphicButton focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{isPlaying ? "Pause" : "Play"}</button>
    <audio ref={audioRef} src="/I Ain't Mad At Cha.mp3"></audio>

    </>
    )
}

export default MusicPlayer;