import React from 'react'
import { BsList } from "react-icons/bs"
import "./header.css"
import { MdOutlineLogout } from "react-icons/md";
    
const Header = () => {


  const loginStatus = localStorage.getItem ('loginStatus') === 'true' ?true:false

  const  logOut = () => {
    localStorage.clear();
    window.location.pathname = "/";
  }

  return (
    <>
     
    <nav className="d-flex justify-content-between bg-dark text-white  overflow-hidden  header1" >

      <h1 className="fs-3 mx-2 mt-3" style={{fontFamily:"serif,Arial"}}>Weather</h1>
      {/* <h1 className="navbar-brand col-3 fs-2 mx-2" id= "hoverS"  style={{fontFamily:"serif,Arial"}}>Sonal</h1>
      <button 
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
        <BsList size={50} color="white"/>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav col-9 d-flex justify-content-end">
          <li className="nav-item active col-2">
            <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item col-2">
            <a className="nav-link text-white" href="#">About Us</a>
          </li>
          <li className="nav-item col-2">
            <a className="nav-link text-white" href="#">Feature</a>
          </li>
          {/* <li className="nav-item col-2">
            <a className="nav-link" href="#"></a>
          </li> */}
          {/* <li className="nav-item col-2">
            <a className="nav-link text-white" href="#">Contact Us</a>
          </li> */} 
        {  
          loginStatus === true ?<h1>
            <button  style={{color:"white" ,border:"none"}} className='bg-dark m-1 ' onClick={logOut} >
              <MdOutlineLogout size={22}/></button> 
          </h1>:''
        }
        
       
    </nav>

    </>
  )
}

export default Header;