import ChartsPage from "./pages/ChartsPage";
import SearchPage from "./pages/SearchPage";
import { AudioProvider } from "./contexts/AudioContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<ChartsPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  );
}
