import { useState, React } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import SignIn from "../Signin/signin";
import Swal from "sweetalert2"; //  use for better  alert show

const Login = () => {
  const [loginValue, setLoginValue] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let userInfo = JSON.parse(localStorage.getItem('userInfo'))

    if(loginValue.email === userInfo.email && loginValue.password === userInfo.password){
      localStorage.setItem('loginStatus' ,'true') 
      window.location.pathname='/home' ;
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter correct email or password',
        footer: '<a href="">Forgot Password ?</a>'
      })
    }
  };

  return (
    <>
      <div className="main-box login">
        <h2 className="text-center">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="m-4">
            <input
              id="email"
              className="form-control border-top-0 border-left-0 border-right-0"
              type="email"
              name="email"
              value={loginValue.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="m-4">
            <input
              id="password"
              className="form-control  border-top-0 border-left-0 border-right-0"
              type="password"
              name="password"
              value={loginValue.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <br></br>

          <div className="d-flex justify-content-center mt-3">
            <Button type="submit" variant="contained">
              Login
            </Button>
          </div>
        </form>

        <br></br>
        <br></br>

        <div className="d-flex justify-content-center">
          <a href="/signin">New member?</a>
        </div>
      </div>

    
    </>
  );
};

export default Login;
