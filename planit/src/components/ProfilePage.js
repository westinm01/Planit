import React from "react";

function Profile() {

    return(
        <div>
            <h1 > User's Profile Page </h1>
            <p>(insert profile picture)</p>
            <h3>Previous Plan-its</h3>
            <p>
                <ul id="planitlist">
                    <li>Plan-it 1</li>
                    <li>Plan-it 2</li>
                    <li>Plan-it 3</li>
                    <li>Plan-it 4</li>
                </ul>
            </p>
            <h3>Stats Bar</h3>
            <p>
                <ul>
                    <li>Num plan-its per month=XXX</li>
                    <li>Response Completion=YYY</li>
                    <li>Progress bar for the user (could be about the number of plan-its made and maybe for every 10 plan-its you get an achievement?)</li>
                </ul>
            </p>
            <h3>Friends</h3>
            <p>
                <ul>
                    <li>friend 1</li>
                    <li>friend 2</li>
                    <li>friend 3</li>
                </ul>
            </p>

        </div>
    );
}

export default Profile;