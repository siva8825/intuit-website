import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import img1 from '../img/mailchimp.png'
import { PiGlobeThin } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";
const Signup = () => {

 const [name, setName]=useState('')   
const [email,setEmail]=useState('')
const[password,setPasaword]=useState('')
const navigate = useNavigate()
const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name , email, password})
    .then(result =>{console.log(result)
      alert("signup successfull")
   navigate('../login')
    })
    .catch(err=>console.log(err))
}

  return (
    <>
       <div className="lognav1">
    
    <div className="logimg1"><img src={img1} alt=""  className='img1'/></div>

<div className="logeng1"><PiGlobeThin  className='globe1'/><p className='eng1'>English</p><IoChevronDown/></div>
    
    </div>   

    <div className="d-flex justify-content-center align-items-center  vh-100 bgc  ">

<div className="log p-3 rounded ">
  <p className="h2 mb-3 in">REGISTER</p>
  <form onSubmit={handleSubmit}>

  <div className="mb-3">
  <label htmlFor="email"><strong>Name</strong></label>
  <input type="text" placeholder='Enter Name' autoComplete='off' name='name' className='form-control rounded-0' 
 onChange={(e)=>setName(e.target.value)}
  />
</div>


<div className="mb-3">
  <label htmlFor="email"><strong>Email</strong></label>
  <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' 
 onChange={(e)=>setEmail(e.target.value)}
  />
</div>

<div className="mb-3">
  <label htmlFor="password"><strong>Password</strong></label>
  <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0'
   onChange={(e)=>setPasaword(e.target.value)}
  />
</div>

<button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
<p>Already have an acount</p>
<Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Login</Link>
  </form>
</div>

</div>


    
    
    </>
  )
}

export default Signup