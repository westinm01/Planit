import React from "react";
import NavBar from "./NavBar";
function Profile() {

    return(
        <div>
            <NavBar />
            <br />
        <div className="profilepage">
            <br />
            <h1 id="title"> Sally's Profile Page </h1>
            <p>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" className="blankprofile"  />
                <br /><input type="submit" id="changeprofile" value="Change Profile Picture"/>
                
            </p>
            
            <p>
                <h3 id="secondtitleprofile">Previous Planits</h3>
                <ul id="planitlist">
                    <input type="button" value="Psych 101 Group Meeting"/>
                    <input type="button" value="Spring Splash Planning"/>
                    <input type="button" value="Meet with Advisor"/>
                    <input type="button" value="CS175 Group Meeting wk10"/>
                    
                </ul>
            </p>
            <p>
                <h3 id="secondtitleprofile">Planit Statistics</h3>
                <p id="statsbar" >
                    <div id="planitstatBox"> 
                        <div id="biggerfontstat">Average Number of Planits Per Month: <br /></div>
                         6
                    </div>
                    
                    <div id="planitstatBox">
                        <div id="biggerfontstat"> Average Response Completion Percentage: <br /></div>
                        about 87% of people complete your planits
                    </div>
                    
                    
                </p>
            </p>

            <p>
                <h3 id="secondtitleprofile">Friends</h3>
                <ul div id="friendslist">
                    <li>Carly Peterson</li>
                    <li>Leo Williams</li>
                    <li>Mark Zuckerberg</li>
                    <li>...</li>
                </ul>
            </p>

        </div>
        </div>
    );
}

export default Profile;