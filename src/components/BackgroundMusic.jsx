import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const fadeIntervalRef = useRef(null);

  const startWithFadeIn = (audioElement) => {
    if (!audioElement) return;
    
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    audioElement.volume = 0;
    audioElement.play()
      .then(() => {
        setIsPlaying(true);
        setShowHint(false);
        localStorage.setItem('portfolio-music', 'playing');

        // Fade in volume from 0 to 0.05
        let currentVol = 0;
        fadeIntervalRef.current = setInterval(() => {
          if (currentVol < 0.05) {
            currentVol = parseFloat((currentVol + 0.005).toFixed(3));
            audioElement.volume = Math.min(0.05, currentVol);
          } else {
            clearInterval(fadeIntervalRef.current);
          }
        }, 100);
      })
      .catch(err => {
        // Autoplay was blocked, show hint to guide the user to click
        setShowHint(true);
      });
  };

  useEffect(() => {
    // Attempt autoplay immediately
    startWithFadeIn(audioRef.current);

    const handleActivation = () => {
      if (audioRef.current && audioRef.current.paused) {
        startWithFadeIn(audioRef.current);
      }
      setShowHint(false);
      removeListeners();
    };

    const removeListeners = () => {
      window.removeEventListener('click', handleActivation);
      window.removeEventListener('mousedown', handleActivation);
      window.removeEventListener('touchstart', handleActivation);
      window.removeEventListener('keydown', handleActivation);
      window.removeEventListener('pointerdown', handleActivation);
    };

    // Listen to direct user gestures on mount
    window.addEventListener('click', handleActivation);
    window.addEventListener('mousedown', handleActivation);
    window.addEventListener('touchstart', handleActivation);
    window.addEventListener('keydown', handleActivation);
    window.addEventListener('pointerdown', handleActivation);

    return () => {
      removeListeners();
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation(); 
    if (!audioRef.current) return;

    if (isPlaying) {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      audioRef.current.pause();
      setIsPlaying(false);
      setShowHint(false);
      localStorage.setItem('portfolio-music', 'muted');
    } else {
      startWithFadeIn(audioRef.current);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        <audio
          ref={audioRef}
          src="/assets/music/03%20Billie%20Jean.mp3"
          loop
        />
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-12 h-12 bg-black/60 border border-white/20 hover:border-white/50 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none cursor-pointer"
          title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        >
          {isPlaying ? (
            /* Animated equalizer lines */
            <div className="flex items-end gap-[3px] h-4">
              <span className="w-[3px] bg-emerald-400 rounded-full animate-sound-wave-1"></span>
              <span className="w-[3px] bg-emerald-400 rounded-full animate-sound-wave-2"></span>
              <span className="w-[3px] bg-emerald-400 rounded-full animate-sound-wave-3"></span>
              <span className="w-[3px] bg-emerald-400 rounded-full animate-sound-wave-4"></span>
            </div>
          ) : (
            /* Speaker icon with a cross to indicate muted state */
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          )}
        </button>
        
        {/* Visual State Text */}
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5 select-none pointer-events-none">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </div>

      {/* Floating Activation Hint Overlay */}
      {showHint && (
        <div 
          onClick={() => startWithFadeIn(audioRef.current)}
          className="fixed inset-0 z-40 bg-black/5 cursor-pointer flex items-center justify-center select-none"
        >
          <div className="bg-black/80 border border-white/10 px-4 py-2 rounded-lg text-xs tracking-wider text-emerald-400/90 font-medium animate-pulse backdrop-blur-sm shadow-xl pointer-events-none absolute bottom-20 left-6">
            Click anywhere to activate audio 🎵
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;
