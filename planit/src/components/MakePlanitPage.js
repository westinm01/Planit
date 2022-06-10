import React from "react";
import NavBar from "./NavBar";
import { Navbar, Container, Nav } from "react-bootstrap";

import logo from '../PlanItLogo2.png';


function MakePlanit() {
    return(
        <div>
       <img src={logo} className="Top-logo" alt="Top-logo" />
            <NavBar />
            <br />
        
        <div className="makeplanit">
            
            <h1 id="title">Make A Planit! </h1>
            <br />
            <p className="summary-makeplanit">It is super easy to make a planit. Just fill out the following fields and submit! A link will be generated for you once all fields are completed.</p>
            <p >
                
                Event name:  <br />
                <input type="text" className="event-name" placeholder="Event name"></input>
            </p>
            <br />
            <p>What dates are you using for the planit?  <br />
                <p className="date-style">
                    Start Date: <input type="date" /> <br />
                    End Date: <input type="date" />
                </p>
                
            </p>
            
            <p>What are the time parameters? (i.e. 9am-5pm) <br />
                <input type="time" className="starttime" placeholder="Earliest time available"></input>
                -
                <input type="time" className="endtime" placeholder="Latest time available" />
            </p> <br />
            <p>What time zone will you be using? <br />
                <select name="timezone" className="timezone">
                    <option value="temp">--Choose Timezone--</option>
                    <option value="AST">Alaska Standard Time</option>
                    <option value="ART">(Arabic) Egypt Standard Time</option>
                    <option value="AGT">Argentina Standard Time</option>
                    <option value="ACT">Australia Central Time</option>
                    <option value="AET">Australia Eastern Time</option>
                    <option value="BST">Bangladesh Standard Time</option>
                    <option value="BET">Brazil Eastern Time</option>
                    <option value="CNT">Canada Newfoundland Time</option>
                    <option value="CAT">Central African Time</option>
                    <option value="CST">Central Standard Time</option>
                    <option value="CTT">China Taiwan Time</option>
                    <option value="EAT">Eastern African Time</option>
                    <option value="EST">Eastern Standard Time</option>
                    <option value="EET">Eastern European Time</option>
                    <option value="ECT">European Central Time</option>
                    <option value="GMT">Greenwich Mean Time</option>
                    <option value="HST">Hawaii Standard Time</option>
                    <option value="IST">India Standard Time</option>
                    <option value="IET">Indiana Eastern Standard Time</option>   
                    <option value="JST">Japan Standard Time</option>
                    <option value="MET">Middle East Time</option>
                    <option value="MIT">Midway Islands Time</option>
                    <option value="MST">Mountain Standard Time</option>
                    <option value="NET">Near East Time</option>
                    <option value="NST">New Zealand Standard Time</option>
                    <option value="PST">Pacific Standard Time</option>
                    <option value="PLT">Pakistan Lahore Time</option>
                    <option value="PNT">Phoenix Standard Time</option>
                    <option value="PRT">Puerto Rico and US Virgin Islands Time</option>
                    <option value="SST">Soloman Standard Time</option>
                    <option value="UTC">Universal Coordinated Time</option>
                    <option value="VST">Vietnam Standard Time</option> 
                </select>
            </p> <br />
            <p>Invite Plan-it Users 
                <p id="optional">
                    *Optional*
                </p>
                <br />
                <input type="text" className="users" placeholder="User's name(s)"></input>
            </p>
            <p>
                <Nav.Link href="/schedule" id="submitButton">Submit</Nav.Link>
            
            </p>
            </div>
        
        </div>
    );
}

export default MakePlanit;