import React from "react";
import { Navbar } from "react-bootstrap";
import NavBar from "./NavBar";


function Schedule() {

    return(
        <div><Navbar />
        <br />
        <div className="schedulepage">
            <h1 id="title">Scheduling Page</h1>
            <br />
            <p className="schedule">Please enter in your availability for the following dates: 
                <br />
                (insert start date) - (insert end date)
            </p>

            <p>
                Name: <input type="text" placeholder="Name"/>
                
                <div className="scheduletable">
                    Insert table <br />
                    This depends on the user input (i.e. rows depends on time restrictions and columns depend on the dates selected)
                </div>
            </p>

            <p>
                <input type="submit" placeholder="Submit" />
            </p>




        </div>
        </div>
    );
}

export default Schedule;