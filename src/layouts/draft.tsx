import React, { useState, useRef } from 'react';
// 1. Import file audio-nya dulu di sini (sesuaikan jumlah titik ../ dengan posisi foldermu)
import letItHappenAudio from '../assets/Let it happen - Tame Impala .mp3';

export default function Draft() {
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
    <div className="bg-[#323131] rounded-lg py-4 px-6 flex items-center justify-between max-w-md mx-auto shadow-lg">
      
      {/* Bagian Info Lagu */}
      <div className="flex flex-col">
        <span className="text-white font-semibold text-lg tracking-wide">
          Let it Happen 🎼
        </span>
        <span className="text-gray-400 text-sm">
          Tame Impala
        </span>
      </div>

      {/* Tombol Kustom Play / Pause */}
      <button 
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white rounded-full transition-all duration-200 shadow-md focus:outline-none"
      >
        {isPlaying ? (
          // Icon Pause
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
          </svg>
        ) : (
          // Icon Play
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        )}
      </button>

    </div>
  );
}