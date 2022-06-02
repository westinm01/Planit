import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import MakePlanit from "./components/MakePlanitPage";
import Profile from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br></br>

      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
