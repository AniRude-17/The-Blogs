import React from 'react'
import { Link } from 'react-router-dom'
const SingleBlog = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://picsum.photos/900/900"/>
        <div className="user">
          <img src="https://picsum.photos/100/100"/>
          <div className="info">
            <span>By Rude</span>
            <p>Posted 449 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              Edit
            </Link>
            <Link to="/write?edit=2">
              Delete
            </Link>
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  )
}

export default SingleBlog