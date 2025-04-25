import { useEffect, useState } from "react";
import { Track } from "../types";
import SongCard from "../components/SongCard";
import SongOfTheDay from "../components/SongOfTheDay";

export default function ChartsPage() {
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/chart/0/tracks?limit=10");
        if (!res.ok) throw new Error("Chart-API error");
        const data = await res.json();
        setTopTracks(data.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="mb-10">
      <SongOfTheDay />
      <h1 className="text-2xl font-bold mb-4 mt-8">Top 10 Charts</h1>
      <ul className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {topTracks.map((track, index) => (
          <SongCard
            key={track.id}
            track={track}
            trackNumber={index + 1}
          ></SongCard>
        ))}
      </ul>
    </div>
  );
}
