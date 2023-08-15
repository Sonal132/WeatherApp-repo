import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../pages/Login/login"
import SignIn from "../pages/Signin/signin"
import Home from "../pages/Home/home";
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import { SecureRoute } from './secureRoute';

const RouterPath = () => {
  return (

<BrowserRouter>
<Header/>
<Routes>
 
<Route path='/' element={<Login/>} exact/>
<Route path='/signin' element={<SignIn/>} exact/>

<Route element={<SecureRoute />} >

<Route path='/home' element={<Home/>} exact/>

</Route>

</Routes>
<Footer/>
</BrowserRouter>    
    
    
    
  )
}

export default RouterPath