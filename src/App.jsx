import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import UsingFetch from './UsingFetch';
import UsersFetch from "./UsersFetch";
import GeoFetch from "./GeoFetch";
function App() {
  return (
    <>
      <div>
        <h1>GEOFetch - Earthquake info for NZ </h1>
      </div>
      <div>
        <GeoFetch />
      </div>
    </>
  );
}

export default App;
