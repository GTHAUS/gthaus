import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Warn from "./assets/images/warn.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Warn} alt="warn" className="Warn" />
      </header>
    </div>
  );
}

export default App;
