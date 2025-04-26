import { useContext, useEffect, useState } from "react";
import { Track } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCircleStop } from "@fortawesome/free-solid-svg-icons";
import { AudioContext } from "../contexts/AudioContext";
import React from "react";

export default function SongOfTheDay() {
  const [songOfTheDay, setSongOfTheDay] = useState<Track | null>(null);
  const [loading, setLoading] = useState(false);
  const { play, current } = useContext(AudioContext);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await fetch("/api/track/3047560351");
        if (!res.ok) throw new Error("Chart-API error");
        const data = await res.json();
        console.log(data);
        setSongOfTheDay(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold mb-4">Song des Tages</h1>
      {loading && <p>Loading...</p>}
      {songOfTheDay != null ? (
        <div className="flex gap-4 items-center">
          <img
            src={songOfTheDay.album.cover}
            alt="Album-Cover"
            className="w-28 h-28 rounded"
          />
          <div className="mr-2">
            <p
              className={`text-2xl font-semibold line-clamp-2 ${
                current === songOfTheDay.id ? "text-green-400" : "text-white"
              }`}
            >
              {songOfTheDay.title}
            </p>
            <p className="text-lg text-gray-400 line-clamp-2">
              {songOfTheDay.artist.name}
            </p>
          </div>
          {current === songOfTheDay.id ? (
            <FontAwesomeIcon
              icon={faCircleStop}
              onClick={() => play(songOfTheDay)}
              className="text-5xl text-green-400 animate-pulse cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              icon={faCirclePlay}
              onClick={() => play(songOfTheDay)}
              className="text-5xl cursor-pointer hover:text-gray-200"
            />
          )}
        </div>
      ) : (
        <p>Song konnte nicht geladen werden.</p>
      )}
    </div>
  );
}
