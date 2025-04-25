import { useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Seite</h1>
      <p>ID: {id}</p>
    </div>
  );
}
