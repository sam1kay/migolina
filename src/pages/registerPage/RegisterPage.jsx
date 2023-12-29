import React from "react";
import './registerPage.css'
 

export default function RegisterPage() {
  return (
    <div className="login">
    <div className="loginContainer">
      <div className="loginLeft">
        <img src="/assets/postsimages/triangl.png" alt="" className="logoImage" />
        <span className="loginDescription">
          your ground to connect 
        </span>
      </div>
     
      <div className="loginRight">
      <input type="text" name="" id="" className="registerInp" placeholder='Username' />
        <input type="email" name="" id="" className="registerInp" placeholder='Email' />
        <input type="password" name="" id="" className="registerInp" placeholder='Password' />
        <input type="password" name="" id="" className="registerInp" placeholder='Reenter Password' />
       

        <button className="registerBtn">Sign up</button>
        <button className="loginButton">Login</button>

      </div>
   
    </div>
  </div>
  )
}
