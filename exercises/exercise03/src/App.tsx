import ChartsPage from "./pages/ChartsPage";
import { AudioProvider } from "./contexts/AudioContext";

// TODO 1: Installiere den React Router

export default function App() {
  return (
    <AudioProvider>
      {
        // TODO 5: Nutze statt dem folgenden Code einen Router mit dem AppLayout und einer Index-Seite (ChartsPage).
        // Später soll unter dem Pfad /search auch eine Search-Seite hinzugefügt werden .
        //
        // TODO 6: Erstelle eine Search-Page. Sie soll ein Inputfeld und einen "Suchen"-Button haben. Nach der Suche sollen die Ergebnisse
        // mit auf der ChartsPage in einem Grid von SongCards angezeigt werden.
        // Füge dann den Link zur Search-Seite im AppLayout hinzu. Als Icon kannst du faMagnifyingGlass von FontAwesome benutzen.
      }
      <div className="min-h-screen bg-[#222163] text-white p-8">
        <ChartsPage />
      </div>
    </AudioProvider>
  );
}
