import { useContext } from "react";
import { Track } from "../types";
import { AudioContext } from "../contexts/AudioContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCircleStop } from "@fortawesome/free-solid-svg-icons";

interface SongCardProps {
  track: Track;
  trackNumber?: number;
}

export default function SongCard({ track, trackNumber }: SongCardProps) {
  const { play, current } = useContext(AudioContext);

  return (
    <li
      key={track.id}
      onClick={() => play(track)}
      className="cursor-pointer hover:bg-indigo-900 rounded-md p-4 mx-2 flex gap-4 items-center transition duration-300 hover:scale-105 shadow-2xl"
    >
      {trackNumber && <span className="text-gray-400">{trackNumber}</span>}

      <img
        src={track.album.cover}
        alt="Album-Cover"
        className="w-14 h-14 rounded"
      />
      <div className="flex-1">
        <p
          className={`font-semibold line-clamp-2 ${
            current === track.id ? "text-green-400" : "text-white"
          }`}
        >
          {track.title}
        </p>
        <p className="text-sm text-gray-400 line-clamp-2">
          {track.artist.name}
        </p>
      </div>
      {current === track.id ? (
        <FontAwesomeIcon
          icon={faCircleStop}
          className="text-2xl text-green-400 animate-pulse"
        />
      ) : (
        <FontAwesomeIcon icon={faCirclePlay} className="text-2xl" />
      )}
    </li>
  );
}
