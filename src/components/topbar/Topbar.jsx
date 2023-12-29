import React from "react";
import "./topbar.css"
import { Link } from 'react-router-dom'
import SearchIcon  from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainUser } from "../../userdatabase";

export default function Topbar() {
  return (
   
<div className="topbarContainer">

  <div className="topbarLeft">
    
    <img src="/assets/postsimages/triangl.png" alt="logo" className="logoimg" />
   <Link className="link" to='/'>
   <span className="logotext">Delta</span>
   </Link> 
  </div>
  <div className="topbarCenter">
    <input placeholder="search" className="searchBar" />
    <button className="searchButton"> <SearchIcon/></button>
  </div>
  <div className="topbarRight">
    <div className="topbarLinks">
      <Link className="link" to='/'>
      <span className="topbarLink">Homepage</span>
      </Link>
     <Link className="link" to='/profile'>
     
     <span className="topbarLink">Profile</span>
     </Link>
     
    </div>
    <div className="topbarIcon">
        <div className="topbarIconItem">
            <PersonIcon/> 
            <span className="iconCounter">1</span>
        </div>
        <div className="topbarIconItem">
            <MessageIcon/> 
            <span className="iconCounter">3</span>
        </div>
        <div className="topbarIconItem">
            <NotificationsIcon/>
            <span className="iconCounter">9</span>
        </div>
    </div>
    <span className="topbarUsername">{MainUser[0].name}</span>
    <img src={MainUser[0].photo} alt="" className="userImage" />
    
  </div>
  
</div>


  )
}
