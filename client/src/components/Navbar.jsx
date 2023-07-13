import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
          <div className='ani_blogs'>Ani Blogs</div>

          <div className="links">
            <Link className='link' to='/?cat=art'>
              <h6>ART</h6>
            </Link>
            <Link className='link' to='/?cat=science'>
              <h6>SCIENCE</h6>
            </Link>
            <Link className='link' to='/?cat=travel'>
              <h6>TRAVEL</h6>
            </Link>
            <Link className='link' to='/?cat=food'>
              <h6>FOOD</h6>
            </Link>

            <span>Username</span>
            <span>Logout</span>
            <span>
              <Link to="/write" className='write'>Write</Link>
            </span>
          </div>

        </div>
      </div>
  )
}

export default Navbar