import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarLinkProps {
  icon: IconDefinition;
  title: string;
}
// TODO 2: Passe die Component SidebarLink so an, dass man einen beliebigen Link damit definieren kann,
// welcher zeigt, ob er gerade aktiv ist, also ob man sich auf der entsprechenden Seite befindet
export default function SidebarLink({ icon, title }: SidebarLinkProps) {
  return (
    <>
      <FontAwesomeIcon icon={icon} />
      <p>{title}</p>
    </>
  );
}
