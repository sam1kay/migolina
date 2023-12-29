import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

import './profile.css'


export default function Profile() {
  return (
    <>
    <Topbar/> 
    <div className="profile">
    
    <Sidebar/>
  <div className="profileRight">
     <div className="profileRightTop">
       <div className="profileCover">
        <img src="/assets/postsimages/1.jpg" alt="" className="profileCoverImg" />
        <img src="/assets/users/1.jpg" alt="" className="profileUserImg" />
        <h4 className="profileName">
          Sami Khalili
        </h4>
       </div>
      
       
    
   
     </div>
    <div className="profileRightBottom">
    <Feed/> 
    <Rightbar profile/>
    </div>
    
  </div>
   
    </div>
    </>
    
  )
}
