import { useState } from 'react';
import { Track } from './types';

interface Props {
  onResults: (tracks: Track[]) => void;
}

export default function SearchBar({ onResults }: Props) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}`);
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      onResults(data.data);
    } catch (err) {
      console.error(err);
      alert('Fehler bei der API‑Abfrage');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Suche nach Songs …"
        className="flex-1 p-3 rounded text-black outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? '…' : 'Suchen'}
      </button>
    </div>
  );
}
