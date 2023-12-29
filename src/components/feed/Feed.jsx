import React from "react";
import './feed.css'
 import Share from '../share/Share'
 import Posts from '../posts/Posts'
 import {PostList} from '../../userdatabase.js'


export default function Feed() {
  return (
    <div className='feed'>
      
      <div className="feedcontainer">
          <Share/>
        {PostList.map((p)=>(
          <Posts key={p.id} postItem={p}/>
          ))}
         
      </div>
    </div>
  )
}
