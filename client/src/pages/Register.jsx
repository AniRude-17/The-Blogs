import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username'/>
        <input required type='email' placeholder='email'/>
        <input required type="password" placeholder='passowrd'/>
        <button>Login</button>
        <span>Already have an account <Link to='/login'> Login</Link></span>
      </form>
    </div>
  )
}

export default Login