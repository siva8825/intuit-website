import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import img1 from '../img/mailchimp.png'
import { PiGlobeThin } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";


const Login = () => {
   
  const [email,setEmail]=useState('')
  const[password,setPasaword]=useState('')
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/Login',{ email, password})
      .then(result =>{console.log(result)

if(result.data==="success"){
  alert("login successfull")
  navigate("/")
}else{
  alert("Password is Incorrect")
}
      })
      .catch(err=>
        console.log(err)
   
      )
  }
  
    return (
      <>
   <div className="lognav1">
    
    <div className="logimg1"><img src={img1} alt=""  className='img1'/></div>

<div className="logeng1"><PiGlobeThin  className='globe1'/><p className='eng1'>English</p><IoChevronDown/></div>
    
    </div>   

  
      <div className="d-flex justify-content-center align-items-center  vh-100 bgc  ">
  
  <div className="log p-3 rounded ">
    <p className="h2 mb-3 in">Login</p>
    <form onSubmit={handleSubmit}>
   <p className="mailacc"> Need a Mailchimp account?
  <span className='cre' style={{textDecoration:"underline"}} > Create an account</span> </p>
  
  <div className="mb-3 mt-3">
    <label htmlFor="email"><strong>Email</strong></label>
    <input type="email" placeholder='Enter Email' autoComplete='off' name='email' required className='form-control rounded-0' 
   onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  
  <div className="mb-3 mt-3">
    <label htmlFor="password"><strong>Password</strong></label>
    <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0'
     onChange={(e)=>setPasaword(e.target.value)}
    />
  </div>
  
  <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
  <p>Already have an acount</p>
  <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Sign Up</Link>
    </form>
  </div>
  
  </div>
  


 </>
  )
}

export default Login