import React from "react";
import './online.css'
import CircleIcon from '@mui/icons-material/Circle';
 

export default function Online({onlineFriend}) {
    

  return (
    <div className='onlineContainer'>
          <div className="onlineFriend">
            <div className="onlineImageContainer">
            <img src={onlineFriend.profilePicture} alt="" className="friendImage" />
            <CircleIcon className='onlineIcon'/>
            </div>
        
            <span className="friendName">{onlineFriend.username}</span>
          </div>

    </div>
  )
}
