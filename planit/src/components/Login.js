import React, { useState } from "react";
import Loginform from "./Loginform";
import logo2 from '../planetVector.png';

function Login() {
  const adminUser ={
    email: "admin@admin.com",
    password: "admin"
  }
  
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError]= useState("");

  const Loginhere= details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password ){
     console.log("logged on");
     setUser({
       name: details.name,
       email: details.email
     });
}    else {
     console.log("wrong deets");
     setError("Details do not matched");
}
  }
  const Logout= ()=> {
    console.log("Logout");
    setUser({
      name:"",
      email: ""
    });
  } 
  return(
  <div className="app">
    <img src={logo2} className="Top-logo" alt="Top-logo" />
    {(user.email !== "")? (
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>
    ):  (<Loginform Loginhere={Loginhere} error={error}/>)}
  </div>
  );
}
export default Login;