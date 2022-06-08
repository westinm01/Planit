import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Logintest from "./components/Logintest";
import NavBar from "./components/NavBar";
import Loginform from './components/Loginform';
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/*<Route path = '/' element = {<Home />}/>
             <Route path = '/Home' element = {<Home />}/>*/}
          <Route path = '/login' element = {<Loginform />}/>
          {/*<Route path = '/register' element0 = {<Register />}/>*/}
        </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
