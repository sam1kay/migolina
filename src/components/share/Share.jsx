import React from "react";
import './share.css'
import { MainUser } from '../../userdatabase';
 
import MoodIcon from '@mui/icons-material/Mood';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SendIcon from '@mui/icons-material/Send';
export default function Share() {
        const mainUser = MainUser.filter(m => m.id === 'main')
       
  return (
    <div className="share">
      <div className="shareContainer">
      <div className="sharetop">
      <img className='shareUserImage' src={mainUser[0].photo} alt="" />
           <input className='shareinput' type="text" placeholder={mainUser[0].name }/>
          <button className="shareButton"> <SendIcon/> </button>
      </div>
      <hr className="shareLine" />
        <div className="sharebottom">
           <div className="shareOptions">
            <div className="shareOption">
            <AddPhotoAlternateIcon htmlColor='green' className='shareIcon ' />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
            <AddLocationAltIcon htmlColor='red' className='shareIcon ' />
              <span className="shareOptionText">Location</span>
            </div>
             
            <div className="shareOption">
            <MoodIcon htmlColor='orange' className='shareIcon ' />
              <span className="shareOptionText">Feeling</span>
            </div>
           </div>
        </div>
      </div>
        
    </div>
  )
}
