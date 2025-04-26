import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounterPage from "./pages/CounterPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import LinkPage from "./pages/LinkPage";
import TailwindPage from "./pages/TailwindPage";
import PokemonPage from "./pages/PokemonPage";
import AuthPage from "./pages/AuthPage";
import ClickButtonPage from "./pages/ClickButtonPage";
import ClickCounterPage from "./pages/ClickCounterPage";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/clickbutton" element={<ClickButtonPage />} />
          <Route path="/clickcounter" element={<ClickCounterPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
          <Route path="/tailwind" element={<TailwindPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="/links" element={<LinkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
