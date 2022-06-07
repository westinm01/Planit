import React from "react";

function Profile() {

    return(
        <div className="profilepage">
            <h1 > User's Profile Page </h1>
            <p>(insert profile picture)</p>
            
            <p>
                <h3>Previous Plan-its</h3>
                <ul id="planitlist">
                    <li>Plan-it 1</li>
                    <li>Plan-it 2</li>
                    <li>Plan-it 3</li>
                    <li>Plan-it 4</li>
                </ul>
            </p>
            <p>
                <h3>Stats Bar</h3>
                <ul id="statsbar">
                    <li>Num plan-its per month=XXX</li>
                    <li>Response Completion=YYY</li>
                    <li>Progress bar for the user (could be about the number of plan-its made and maybe for every 10 plan-its you get an achievement?)</li>
                </ul>
            </p>
            <p>
                <h3>Friends</h3>
                <ul id="friendslist">
                    <li>friend 1</li>
                    <li>friend 2</li>
                    <li>friend 3</li>
                </ul>
            </p>

        </div>
    );
}

export default Profile;