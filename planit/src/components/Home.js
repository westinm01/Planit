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
        </div>

        <div className= "sidebar-left">
            <h3>Ads</h3>
        </div>
        
        <div className= "sidebar-right">
            <h3>Ads</h3>
        </div>

        </div>
    );
}

export default Home;