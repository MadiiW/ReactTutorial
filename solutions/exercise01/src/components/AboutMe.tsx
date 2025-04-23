export default function AboutMe() {
  return (
    <div
      style={{
        backgroundColor: "#222163",
        color: "white",
        textAlign: "start",
        padding: "20px",
        borderRadius: "12px",
        maxWidth: "400px",
        marginTop: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#dddddd", marginBottom: "10px" }}>Über mich:</h2>
      <ul>
        <li>23 Jahre alt</li>
        <li>CSM-Studentin</li>
        <li>im 4. Semester</li>
      </ul>
    </div>
  );
}
