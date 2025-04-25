import { Link } from "react-router-dom";
import Counter from "../components/Counter";

export default function CounterPage() {
  return (
    <>
      <h1>Hier wird gezählt!</h1>
      <Counter />
      <Link to="/">Zurück</Link>
    </>
  );
}
