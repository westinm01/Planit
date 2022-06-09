import React from "react";
import NavBar from "./NavBar";
import logo from '../PlanItLogo.png';

const Home = () =>{
    return(
        <div>
            <NavBar />
            <br />
        <div className = "home">
            <h3 className="planit-name"> Plan-It</h3>
            <img src={logo} className="planit-logo" alt="logo" />
        <p className = "slogan"> Quick and Easy Planning</p>

        <div className= "sidebar-left">
        <div className= "sidebar-right">

        </div>
        </div>
        </div>
        </div>
    );
}

export default Home;