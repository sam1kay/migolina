import React from "react";
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Friends from '../friendlist/Friends';
import {Users} from '../../userdatabase.js';

export default function Sidebar() {
  return (
    <div className='sidebar'>

    <div className="sidemenuContainer">
      <ul className="sidemenuList">
        <li className="sidemenuItem">
          <HomeIcon className='sidemenuIcon'/>
          <span className="sidemenuItemText">Home</span>
        </li>
        <li className="sidemenuItem">
          <ChatIcon className='sidemenuIcon'/>
          <span className="sidemenuItemText">Messages</span>
        </li>
        <li className="sidemenuItem">
          <VideoCameraBackIcon className='sidemenuIcon'/>
          <span className="sidemenuItemText">Videos</span>
        </li>
        <li className="sidemenuItem">
          <PeopleAltIcon className='sidemenuIcon'/>
          <span className="sidemenuItemText">Groups</span>
        </li>
        <li className="sidemenuItem">
         <BookmarkIcon className='sidemenuIcon'/>
         <span className="sidemenuItemText">Saved</span>
        </li>
        <li className="sidemenuItem">
          <HelpIcon className='sidemenuIcon'/>
          <span className="sidemenuItemText">QnA</span>
        </li>
        <li className="sidemenuItem">
          <WorkIcon className='sidemenuIcon'/>
          <span className="sidemenuItemText">Jobs</span>
        </li>
        <li className="sidemenuItem">
          <EventIcon className='sidemenuIcon'/>
          <span className="sidemenuItemText">Events</span>
        </li>
        <li className="sidemenuItem">
          <SchoolIcon className='sidemenuIcon'/>
          <span className="sidemenuItemText">Courses</span>
        </li>
      </ul>
      <button className="sidebarmenuButton"><ArrowDropDownCircleIcon  className='sidemenuIcon'/> <span className="sidemenuItemText">Show more </span>
      </button>
      <hr className="sidebarmenuLine" />
        
{Users.map(u => 
(
  <Friends key={u.id} user={u} />
)
)}
      

    </div>
    </div>
  )
}
