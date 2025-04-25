import { Outlet } from "react-router-dom";
import SidebarLink from "../components/SidebarLink";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#222163] text-white p-8">
      <div className="flex gap-8">
        <div className="w-[300px] max-w-[400px] rounded-xl px-8 py-1">
          <h1 className="text-4xl font-bold mb-8">Deezer Player</h1>
          <SidebarLink icon={faHouse} title="Home" path="/" />
          <SidebarLink icon={faMagnifyingGlass} title="Search" path="/search" />
        </div>

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
