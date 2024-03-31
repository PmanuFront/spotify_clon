import { useState, useRef, useEffect } from "react"
// import Play from "@/icons/Play.astro";
// import Pause from "@/icons/Pause.astro";

export const Play = () => (<svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor"
><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg
>)

export const Pause = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-full fill-black" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
</svg>
)


export const Player = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSont, setCurrentSong] = useState(null);
    const audioRef = useRef();

    useEffect(() => {
        audioRef.current.src = `/music/1/01.mp3`
    }, [])

    const handleClick = () => {
        if(isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play()
            audioRef.current.volume = 0.1
        }

        setIsPlaying(!isPlaying)
    }

    return (
        <div className="flex flex-row justify-between w-full px-4 z-50 text-white">
            <div>
                CurrentSong...
            </div>

            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex justify-center">
                    <button
                        className="bg-red rounded-full p-2"
                        onClick={handleClick}
                    >
                        {isPlaying ? <Pause/> : <Play />}
                    </button>
                </div>
                Reproductor
            </div>

            <div>
                Volumen
            </div>

            <audio ref={audioRef}/>
        </div>
    )
}