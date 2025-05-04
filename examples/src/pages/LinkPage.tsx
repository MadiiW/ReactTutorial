import { Link, NavLink } from "react-router-dom";

export default function LinkPage() {
  return (
    <nav>
      <h3>Mit Link:</h3>
      <Link to="/links">Links</Link> | <Link to="/dashboard">Dashboard</Link>
      <h3>Mit NavLink:</h3>
      <NavLink
        to="/links"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
          marginRight: "0.5rem",
        })}
      >
        Links
      </NavLink>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Dashboard
      </NavLink>
    </nav>
  );
}
