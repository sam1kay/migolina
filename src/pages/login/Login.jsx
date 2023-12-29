import React from "react";
 import './login.css'
 

export default function Login() {
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

         
        <div className="inputCard">
          <span>User</span>
          <input type="text" className="loginInp"  placeholder='Your user name'/>
          </div>
          <div className="inputCard"> 
          <span>Password</span>
          <input type="password" className="loginInp" placeholder='Your password' />
          </div>

          <button className="loginBtn">Login</button>
          <span className="passrecov">Forgot your password?</span>

         
            <button className="registerButton"   >
              Create Account
            </button>
            
         
      
        </div>
      </div>
    </div>
  )
}
