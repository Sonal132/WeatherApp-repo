import React ,{useEffect, useSate} from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const  SecureRoute = () => {

const loginStatus = localStorage.getItem ('loginStatus') === 'true' ?true:false

// let loginStatus = false ;

// if(localStorage.getItem ('loginStatus') === 'true'){
//   loginStatus = true;
// }


  return (

    loginStatus == true? <Outlet/>: <Navigate exact to='/' /> 

    
  )
}

