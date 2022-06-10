import React from "react";
import NavBar from "./NavBar";
import logo from '../PlanItLogo2.png';


const Home = () =>{
    return(
        <div>
            
            <NavBar />
            <br />
            <body>
               <h5> Welcome to Plan-It</h5>
           
            <img src={logo} className="planit-logo" alt="logo" />
            </body>
        <p className = "slogan"> Quick and Easy Planning</p>
            

        
        
        </div>
    );
}

export default Home;