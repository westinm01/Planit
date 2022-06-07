import React from "react";



function MakePlanit() {
    return(
        <div class="makeplanit">
            <p >
                <h1 id="title">Make A Plan-it </h1>
                Event name:  
                <input type="text" name="name"></input>
            </p>
            
            <p>What dates are you using for the plan it? Enter the start date and the end date <br />
                <input type="text" name="startdate"></input>
                -
                <input type="text" name="enddate"></input>
            </p>

            <p>What are the time parameters? (i.e. 9am-5pm) <br />
                <input type="text" name="name"></input>
                -
                <input type="text" />
            </p>
            <p>Enter the timezone:
                <input type="text" name="timezone"/>
            </p>
            <p>Invite Plan-it users <br />
                <input type="text" name="name"></input>
            </p>
            <br />
            <p>
                <input type="submit" value="Submit" />
            </p>
        </div>
    );
}

export default MakePlanit;