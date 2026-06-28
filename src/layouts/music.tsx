import React, { useState, useRef } from 'react';
// 1. Import file audio-nya dulu di sini (sesuaikan jumlah titik ../ dengan posisi foldermu)
import letItHappenAudio from '../assets/Let it happen - Tame Impala .mp3';
import icon from '../assets/tame impala.jpg'
import {
  Play,
  Pause,
  SkipBack,
  SkipForward
} from "lucide-react";

export default function AudioSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 2. Masukkan variabel hasil import tadi ke dalam new Audio()
  const audioRef = useRef(new Audio(letItHappenAudio));

  const togglePlay = () => {
    audioRef.current.loop = true;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
 return (
  <>
    <section id='music' className='mt-16 md:mt-24 px-4'>
         <div className="text-white text-center lg:text-[36px] text-2xl font-[Poppins] font-semibold slide-in-down ">
                    <a>My Favorite Music</a>
                </div>
      <div className='container bg-[#131313] flex py-8 md:py-12 px-6 mx-auto flex-col items-center rounded-2xl max-w-md md:max-w-xl shadow-xl border border-white/5 mt-8 fade-in-section'>

        
       
        <p className='text-[#A1A1AA] hover:text-[#d0d0d6] cursor-pointer font-[Inter] font-semibold uppercase tracking-[0.25rem] md:tracking-[0.35rem] text-xs md:text-sm transition-colors'>
          Playing Now
        </p>

    
        <div className='w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mt-6 overflow-hidden rounded-lg shadow-lg'>
          <img className='w-full h-full object-cover' src={icon} alt="Album Cover" />
        </div>

       
        <p className='text-white hover:text-[#d0d0d6] cursor-pointer font-[Inter] font-medium uppercase tracking-[0.15rem] md:tracking-[0.25rem] text-sm md:text-base mt-6 text-center line-clamp-2 px-2 transition-colors'>
          Tame Impala - Let It Happen
        </p>

        
        <div className='mt-8 flex items-center gap-8 md:gap-10'>
          <button className='text-[#A1A1AA] hover:text-white cursor-pointer transition-colors sm:scale-110'
          >
            {isPlaying ? (
<SkipBack onClick={togglePlay} size={26}  />
              ) : (
                     <SkipBack onClick={togglePlay} size={26}  />
              )
            }
                
          </button>
          
          
          <button 
            className='bg-white p-4 rounded-full hover:scale-105 active:scale-95 transition-transform flex items-center justify-center shadow-md' 
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause size={28} className='text-black' strokeWidth={2.5} />
            ) : (
              <Play size={28} className='text-black ml-0.5' strokeWidth={2.5} />
            )}
          </button>
            
            <button onClick={togglePlay} className='text-[#A1A1AA] hover:text-white cursor-pointer transition-colors sm:scale-110'>
            {isPlaying ? (
<SkipForward size={26}  />
            ): (
<SkipForward size={26}  />
            )}
            </button>
          
        </div>

      </div>
    </section>
  </>
);
}