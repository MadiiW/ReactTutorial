import React, { createContext, useRef, useEffect, useState } from "react";
import { Track } from "../types";

type AudioContextType = {
  current: number | null;
  play: (track: Track) => void;
};

export const AudioContext = createContext<AudioContextType>({
  current: null,
  play: () => {},
});

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [current, setCurrent] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const play = (track: Track) => {
    if (current === track.id) {
      audioRef.current.pause();
      setCurrent(null);
      return;
    }
    audioRef.current.src = track.preview;
    audioRef.current.play();
    setCurrent(track.id);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setCurrent(null);

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <AudioContext.Provider value={{ current, play }}>
      {children}
    </AudioContext.Provider>
  );
};
