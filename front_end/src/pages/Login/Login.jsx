import React, { useContext, useEffect, useState } from 'react'
import './Login.css';
import { Helmet } from 'react-helmet';
import {Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ClinicalContext } from '../auth/contextFile';
function Login() { 
  const [info , setInfo]=useState({username:'',password:''})
  const navigate = useNavigate();
  const { handleLogin } = useContext(ClinicalContext);
  function handelInfo(type,newInfo){


    setInfo({
      ...info,
      [type]:newInfo
    })
  }
  console.log(info)

  async function login(e) {
    e.preventDefault();

    try {
    
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        info,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      localStorage.setItem('token',response.data.token)
      handleLogin(response.data.token)
      console.log("Data saved successfully:", response.data);
      navigate('/' , {replace:true})
     
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
     
      } else if (error.request) {
        console.error("Network Error: No response received from the server.");
        
      } else {
        console.error("Error setting up request:", error.message);
      
      }
    }
  }
 
  return (
    <div className="Login-back-ground">
      <div className='Login-container'>
    
      <form action='' className='Loginform'>
        <h1>تسجيل الدخول</h1>
        <div className="input-box-Login">
          <input type="text" placeholder='الاسم'    onChange={(e)=>handelInfo("username",e.target.value)} required />
        </div>
        <div className="input-box-Login">
          <input type="password" placeholder='كلمة السر'    onChange={(e)=>handelInfo("password",e.target.value)} required />
        </div>
        <div className="submit-box-Loign">
        <button type='submit' onClick={(e)=>{login(e)}} >تسجيل الدخول</button>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default Login