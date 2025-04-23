import "./App.css";
import React from "react";
import AboutMe from "./components/AboutMe";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      {React.createElement(Greeting)}
      <AboutMe />
    </div>
  );
}

export default App;
