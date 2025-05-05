// LinkDirectory.js
import { Link } from "react-router-dom";

export default function LinkDirectory() {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/clickbutton", name: "ClickButton" },
    { path: "/clickcounter", name: "ClickCounter" },
    { path: "/counter", name: "Counter" },
    { path: "/auth", name: "Auth" },
    { path: "/pokemon", name: "Pokemon" },
    { path: "/tailwind", name: "Tailwind" },
    { path: "/users/:id", name: "User" },
    { path: "/dashboard", name: "Dashboard" },
    { path: "/dashboard/profile", name: "Profile" },
    { path: "/dashboard/settings", name: "Settings" },
    { path: "/userlist", name: "UserList" },
    { path: "/links", name: "Links" },
  ];

  return (
    <div>
      <h1 className="mb-4">Link Verzeichnis</h1>
      <ul className="space-y-2">
        {routes.map((route, index) => (
          <li key={index}>
            <Link className="text-blue-500 hover:underline" to={route.path}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
