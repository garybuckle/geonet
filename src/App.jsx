import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UsingFetch from "./UsingFetch";
function App() {
  return (
    <>
      <div>
        <h1>GEONET</h1>
      </div>
      <div>
        <UsingFetch />
      </div>
    </>
  );
}

export default App;
