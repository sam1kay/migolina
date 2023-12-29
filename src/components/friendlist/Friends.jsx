import React from "react";
import './friends.css'

export default function Friends({user}) {
  
  return (

     <div className="friendListContainer">
    <ul className="sidebarFriendsList">
    <li className="sidebarFriend">
      <img className='friendImage' src={user.profilePicture} alt="" />
      <span className="friendName">{user.username}</span>
    </li> 
  </ul>
     </div>
    

  )
}
