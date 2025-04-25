import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function AuthDisplay() {
  const context = useContext(AuthContext);

  function handleClick() {
    context.setIsSignedIn(!context.isSignedIn);
  }

  return (
    <>
      <h1 className="heading">
        Eingeloggt? {context.isSignedIn ? "Ja" : "Nein"}
      </h1>
      <button onClick={handleClick}>Login-Status ändern</button>
    </>
  );
}
