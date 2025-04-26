import { faHouse } from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "../components/SidebarLink";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#222163] text-white p-8">
      <div className="flex gap-8">
        <div className="w-[300px] max-w-[400px] rounded-xl px-8 py-1">
          <h1 className="text-4xl font-bold mb-8">Deezer Player</h1>
          {
            // TODO 3: Passe hier die SidebarLink Component an, damit ein funktionierender Link entsteht
          }
          <SidebarLink icon={faHouse} title="Home" />
        </div>

        <div className="flex-1">
          {
            // TODO 4: Hier sollen Kindrouten angezeigt werden
          }
        </div>
      </div>
    </div>
  );
}
