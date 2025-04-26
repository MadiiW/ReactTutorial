import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
  icon: IconDefinition;
  title: string;
  path: string;
}
export default function SidebarLink({ icon, title, path }: SidebarLinkProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `px-4 py-2 text-2xl flex items-center gap-5 ${
          isActive ? "text-green-400 font-semibold" : "text-white"
        }`
      }
    >
      <FontAwesomeIcon icon={icon} />
      <p>{title}</p>
    </NavLink>
  );
}
