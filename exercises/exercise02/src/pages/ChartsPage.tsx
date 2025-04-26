import { useEffect, useState } from "react";
import { Track } from "../types";

export default function ChartsPage() {
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  useEffect(() => {
    // TODO 2: Schreibe hier einen API Call der die aktuellen Top 10 Tracks von Deezer abruft
    // Die API Schnittstelle ist: /api/chart/0/tracks?limit=10
    // Du hast alles richtig gemacht wenn du die Namen der Titel auf der Webseite angezeigt bekommst
    setTopTracks([]);
  }, []);

  return (
    <div className="mb-10">
      {
        // TODO 1: Hier soll der Song des Tages angezeigt werden
        // Wenn du herausfindest wie es geht, kannst du auch einen eigenen Song aussuchen der hier angezeigt wird ;)
      }
      <h1 className="text-2xl font-bold mb-4">Top 10 Charts</h1>
      <ul className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {topTracks.map((track, index) => (
          // TODO 3: Implementiere eine SongCard Component und zeige sie hier für jeden Song an
          // Dabei kannst du dich von der SongOfTheDay Component inspirieren lassen
          // Als Props sollst du den Track und die Zahl der Platzierung in den Charts mitgeben
          <h1>
            {index + 1} {track.title}
          </h1>
        ))}
      </ul>
    </div>
  );
}
