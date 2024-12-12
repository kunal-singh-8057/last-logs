import React from 'react'
import Axios from 'axios'
import { useState } from 'react'
import './App.css'

const Login = () => {

    const[username,setusername] = useState("");
    const[password,setpassword] = useState("");
  
  const check = ()=>{

    Axios.post("http://localhost:4500/api/v1/login",{username,password})
    .then((result)=>{
      if(  result.data === "success"){
        alert("Welcome back users")
      }

      else{
        alert("Sorry try again")
      }
    })
  }


  return (
    <>
       <div className='form1'>
      <input placeholder='Enter the username here' onChange={(e)=>{setusername(e.target.value)}}></input>
      <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
      <button onClick={check}>Submits</button>
    </div>
    </>
  )
}

export default Login