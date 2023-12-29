import React from "react";
import './posts.css'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ClearIcon from '@mui/icons-material/Clear';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import {Users} from '../../userdatabase.js';
import { useState } from 'react';


export default function Posts({postItem}) {
const [like,setLike] = useState(postItem.like)
const [isLiked,setIsLiked] =  useState(false)
const [color,setColor] = useState ('black')
const likeTrigger =() => {
setLike(isLiked ? like-1 : like+1)
setIsLiked(!isLiked)
}
 const [comment,setComment] = useState(postItem.comment)

 const commentTrigger = () => {
  setComment( comment + 1);
 }
  

const user= Users.filter(u=> u.id === postItem.id)
  
    
  return (
    <div  className='posts'>
        <div className="postContainer">
            <div className="postElement">
              <div className="postElementTop">
                 <div className="postElementTopLeft">
                 <img src= {user[0].profilePicture} alt="" className="postUserImage" />
                  <div className="postDetails">
                  <span className="postUserName">{user[0].username}</span>
                  <span className="postDate">{postItem.date}</span>
                  </div>
                 
                 </div>
                 <div className="postElementTopRight">
                    <DragHandleIcon className='topPostIcon'/>
                    <ClearIcon className='topPostIcon'/>
                 </div>
                 
              </div>
              <div className="postElementCenter">
                
                 <div className="postElementItem">
                  
                     <span className="postItemTitle">{postItem?.desc}</span>
                      <img className='postImage' src={postItem.photo} alt="" />
                 </div>
              </div>

              <div className="postElementBottom">
                 
                <div className="interactionButtons">
                  <div className="interactionContainer">
                    <button className="interactionButton" onClick={likeTrigger}  > <ThumbUpIcon  className={`interactionIcon ${isLiked ? 'liked' : ''}`}   />
                    <span className="interactionCounter">{like}</span>
                    </button>
                    
                  </div>
                
                  <div className="interactionContainer">
                    <button className="interactionButton" onClick={commentTrigger}><CommentIcon  className='interactionIcon'/>
                    <span className="interactionCounter">{comment}</span>
                    </button>
                    
                  </div>
                  <div className="interactionContainer">
                    <button className="interactionButton">< ShareIcon className='interactionIcon' />  <span className="interactionCounter">{postItem.share}</span></button>
                    
                  </div>
                  
                </div>
              </div>
            </div>

        </div>

    </div>
  )
}
