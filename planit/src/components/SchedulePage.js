import React from "react";
import { Navbar } from "react-bootstrap";
import NavBar from "./NavBar";
import "../SchedulePage.css"



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

                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                        </tr>
                        <tr>
                            <td>11AM</td>
                            <td></td>
                            <td className="filled"></td>
                            <td className="filled"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12PM</td>
                            <td className="partialfilled"></td>
                            <td></td>
                            <td className="filled"></td>
                            <td></td>
                            <td className="filled"></td>
                        </tr>
                        <tr>
                            <td>1PM</td>
                            <td className="partialfilled"></td>
                            <td></td>
                            <td className="filled"></td>
                            <td className="filled"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2PM</td>
                            <td className="filled"></td>
                            <td></td>
                            <td className="partialfilled"></td>
                            <td></td>
                            <td className="filled"></td>
                        </tr>
                        <tr>
                            <td>3PM</td>
                            <td></td>
                            <td className="filled"></td>
                            <td></td>
                            <td className="partialfilled"></td>
                            <td className="filled"></td>
                        </tr>
                        <tr>
                            <td>4PM</td>
                            <td className="partialfilled"></td>
                            <td></td>
                            <td className="partialfilled"></td>
                            <td></td>
                            <td className="partialfilled"></td>
                        </tr>
                        <tr>
                            <td>5PM</td>
                            <td></td>
                            <td className="partialfilled"></td>
                            <td className="filled"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6PM</td>
                            <td></td>
                            <td className="partialfilled"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7PM</td>
                            <td></td>
                            <td className="partialfilled"></td>
                            <td className="partialfilled"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8PM</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
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