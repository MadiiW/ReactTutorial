import { useRef, useState } from 'react';
import TopCharts from './TopCharts';
import SearchBar from './SearchBar';
import { Track } from './types';

export default function App() {
  const [tracks, setTracks] = useState<Track[]>([]);
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Deezer Player</h1>

      {/* Top‑Charts */}
      <TopCharts current={current} onPlay={play} />

      {/* Suche */}
      <SearchBar onResults={setTracks} />

      {tracks.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4"> Suchergebnisse</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((t) => (
              <li
                key={t.id}
                onClick={() => play(t)}
                className="cursor-pointer hover:bg-gray-800 rounded p-4 flex gap-4 items-center transition"
              >
                <img src={t.album.cover} alt="Album Cover" className="w-16 h-16 rounded" />
                <div>
                  <p className="font-semibold leading-snug">{t.title}</p>
                  <p className="text-sm text-gray-400">{t.artist.name}</p>
                  {current === t.id && (
                    <p className="text-xs mt-1 text-green-400 animate-pulse">Spielt …</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}