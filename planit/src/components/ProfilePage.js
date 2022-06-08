import React from "react";
import NavBar from "./NavBar";
function Profile() {

    return(
        <div>
            <NavBar />
            <br />
        <div className="profilepage">
            
            <h1 id="title"> User's Profile Page </h1>
            <p>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" className="blankprofile"  />
            </p>
            
            <p>
                <h3 id="secondtitleprofile">Previous Plan-its</h3>
                <ul id="planitlist">
                    <li>Plan-it 1</li>
                    <li>Plan-it 2</li>
                    <li>Plan-it 3</li>
                    <li>Plan-it 4</li>
                </ul>
            </p>
            <p>
                <h3 id="secondtitleprofile">Plan-it Statistics</h3>
                <ul id="statsbar">
                    <li>Number of plan-its per month = XXX</li>
                    <li>Average Response Completion Percentage: <br />
                    On average, about 92% of people complete your plan-it.

                    </li>
                    <li>Progress bar for the user (could be about the number of plan-its made and maybe for every 10 plan-its you get an achievement?)</li>
                </ul>
            </p>
            <p>
                <h3 id="secondtitleprofile">Friends</h3>
                <ul id="friendslist">
                    <li>friend 1</li>
                    <li>friend 2</li>
                    <li>friend 3</li>
                </ul>
            </p>

        </div>
        </div>
    );
}

export default Profile;