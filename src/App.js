import React from "react";
import "./App.css";
import Route from "./router";
import { Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="fnc">Dashboard</Link>
      </nav>
      <Route />
    </div>
  );
}

export default App;
