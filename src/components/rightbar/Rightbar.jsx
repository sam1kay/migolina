import React from "react";
import './rightbar.css'

import Eventcard from '../eventcard/Eventcard'
import Adcard from '../adcard/Adcard'
import Online from '../onlinefriends/Online'
import {OnlineFriends} from '../../userdatabase.js'
import Friends from '../friendlist/Friends.jsx'
import { Users } from '../../userdatabase.js'

export default function Rightbar({profile}) {

  const HomeRightbar = ()=>{

    return(
<>
<div className="eventsContainer">
              <h1 className="rightcardTitle">Events near you</h1>
              <Eventcard/>
              <Eventcard/>
              <Eventcard/>
             
        </div>

        <hr className="rightbarLine" />
        
        <div className="addContainer">
        <h1 className="rightcardTitle">Sponsored</h1>
            <Adcard/>
        </div>  

        <hr className="rightbarLine" />
        <div className='infoTitle'>
          <h3>Online now</h3>
        </div>
        
        {

          
          OnlineFriends.map((o)=> (
              <Online key={o.id} onlineFriend ={o} />
          ))
        }

</>
    )
 
  }
  
const ProfileRightbar = ()=>{
  return(

<>

<div>
<div className="infoCard">
  <h3 className='infoTitle' >User Information</h3>
   <div className="infoDetail">
       <h4 className='infoItem'>City :</h4>
       <span>Agadir</span>
   </div>
   <div className="infoDetail">
      <h4 className='infoItem'>From :</h4>
      <span>El-jadida</span>

   </div>
 
</div>
<hr className="rightbarLine" />

<div className='infoTitle' >
 <h3>Your Followers</h3>
</div>


  <div className="myFriends">


  {Users.map(u => 
(
  <Friends key={u.id} user={u} />
)
)}
       
     
  </div>

  
        <hr className="rightbarLine" />
        
        <div className='infoTitle'>
          <h3>Online now</h3>
        </div>
        
        {

          
          OnlineFriends.map((o)=> (
              <Online key={o.id} onlineFriend ={o} />
          ))
        }
  
  
  
</div>


</>

  )
}

  return (
    <div className='rightbar'> 


      <div className="rightbarContainer">
       
      {profile? <ProfileRightbar/> : <HomeRightbar/>}
       
      </div>
    </div>
  )
}
