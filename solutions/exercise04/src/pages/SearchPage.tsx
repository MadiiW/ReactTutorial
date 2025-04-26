import { useState } from "react";
import { Track } from "../types";
import SongCard from "../components/SongCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(query.trim())}`
      );
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setTracks(data.data);
    } catch (err) {
      console.error(err);
      alert("Fehler bei der API‑Abfrage");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex gap-2 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Suche nach Songs…"
          className="flex-1 p-3 rounded-lg bg-white text-black outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-green-400 hover:bg-green-500 hover:cursor-pointer transition px-4 py-2 rounded-lg disabled:opacity-50"
          disabled={loading}
        >
          Suchen
        </button>
      </div>

      {tracks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 opacity-50">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-9xl m-12" />
          <p className="text-3xl font-semibold text-white">
            Suche hier nach deinen Lieblingssongs oder -künstlern!
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4"> Suchergebnisse</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track) => (
              <SongCard key={track.id} track={track} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
