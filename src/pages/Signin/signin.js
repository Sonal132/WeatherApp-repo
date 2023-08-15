import React,  { useState } from "react";
import Button from '@mui/material/Button';
import "./signin.css"
import { NavLink } from "react-router-dom";
 

const SignIn = () => {


    const[userData , setUserData]=useState({name:'' ,email:'' ,password:''})

  const handleChange = (e) => {

    setUserData({...userData, [e.target.name]:e.target.value })
    //console.log(userData)

  }



  const handleSubmit =(e)=>{
    
   e.preventDefault()
    console.log("userData : " ,userData)
     localStorage.setItem("userInfo",JSON.stringify(userData))

     window.location.pathname='/' // navigate kr dega 

  }



  return (
    <>
      <div className="main-box login">
        <h2 className="text-center">SignIn</h2>
        <form  onSubmit={handleSubmit}>
        <div className="m-4">
            <input
              className="form-control border-top-0 border-left-0 border-right-0"
              type="text"
              placeholder="Enter name"
              name="name"
              value={userData.name} 
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-4">
            <input
              id="email"
              className="form-control border-top-0 border-left-0 border-right-0"
              type="email"
              placeholder="email"
              name="email"
              value={userData.email} 
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-4">
            <input
              id="password"
              className="form-control  border-top-0 border-left-0 border-right-0"
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password} 
              onChange={handleChange}
              required
            />
          </div>
          <br></br>

          <div className="d-flex justify-content-center mt-3">
            
          <Button type="submit"  variant="contained" >SignIn</Button>
          </div>
        </form>
      </div>

    </>
  );
};

export default SignIn;
