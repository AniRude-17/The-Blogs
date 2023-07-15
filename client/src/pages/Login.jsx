import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })

  const [err,setError] = useState(null)

  const navigate = useNavigate()


  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      const res=await axios.post("http://localhost:1234/api/auth/login", inputs)
      navigate('/login')
    }
    catch(err){
      setError(err.response.data)
    }

  }




  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required  type="text" placeholder='username'/>
        <input required  type="password" placeholder='passowrd'/>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't have an account <Link to='/register'> Register</Link></span>
      </form>
    </div>
  )
}

export default Login