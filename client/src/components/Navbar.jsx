import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../context/authContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutNavbar = () => {
    logout();
    navigate("/login");
  };

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

            <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logoutNavbar}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
          </div>

        </div>
      </div>
  )
}

export default Navbar