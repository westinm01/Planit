//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home"

import MakePlanit from "./components/MakePlanitPage";
import Profile from "./components/ProfilePage";
import Loginform from "./components/Loginform";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">

      <NavBar />     
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/Home' element = {<Home />}/>
          <Route path = '/makeAPlanit' element = {<MakePlanit />}/>
          <Route path = '/profile' element = {<Profile />}/>
          <Route path = "/login" element = {<Loginform />}/>
          <Route path = "/signup" element = {<SignUp />}/>
        </Routes>
    </BrowserRouter>
      {/* <header className="App-header">


      
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
      </header> */}
    </div>
  );
}

export default App;
