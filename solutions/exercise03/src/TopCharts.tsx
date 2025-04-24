import { useEffect, useState } from 'react';
import { Track } from './types';

interface Props {
  current: number | null;
  onPlay: (track: Track) => void;
}

export default function TopCharts({ current, onPlay }: Props) {
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/chart/0/tracks?limit=10');
        if (!res.ok) throw new Error('Chart-API error');
        const data = await res.json();
        setTopTracks(data.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Top 10 Charts</h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topTracks.map((t, idx) => (
          <li
            key={t.id}
            onClick={() => onPlay(t)}
            className="cursor-pointer hover:bg-gray-800 rounded p-4 flex gap-4 items-center transition"
          >
            <span className="text-gray-400 w-6 text-right">{idx + 1}</span>
            <img src={t.album.cover} alt="Album" className="w-14 h-14 rounded" />
            <div className="flex-1">
              <p className="font-semibold truncate leading-snug">{t.title}</p>
              <p className="text-sm text-gray-400 truncate">{t.artist.name}</p>
              {current === t.id && (
                <p className="text-xs mt-1 text-green-400 animate-pulse">Spielt …</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
