import ChartsPage from "./pages/ChartsPage";
import { AudioProvider } from "./contexts/AudioContext";

export default function App() {
  return (
    <AudioProvider>
      <div className="min-h-screen bg-[#222163] text-white p-8">
        <ChartsPage />
      </div>
    </AudioProvider>
  );
}
