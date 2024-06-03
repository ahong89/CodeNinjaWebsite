import './Login.css';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate();

    const [loginForm, setloginForm] = useState({
        email: "",
        password: ""
    })

    function handleChange(event) { 
        const {value, name} = event.target
        setloginForm(prevNote => ({
            ...prevNote, [name]: value})
        )
    }

    function handleLogin(event) {
        console.log(loginForm)
        axios({
            method: "POST",
            url:"/token",
            data:{
              email: loginForm.email,
              password: loginForm.password
            }
          })
          .then((response) => {
            props.setToken(response.data.access_token)
            props.setAuthentication(true)
            navigate('/student')
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
              console.log(props.isAuthenticated)
            }
          }
        )

        event.preventDefault()
    }

    return(
        <div className="idk">
            <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        onChange={handleChange}
                        type="email" 
                        text={loginForm.email}
                        name="email" 
                        placeholder="Email"
                        value={loginForm.email}
                    required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className="input-box">
                <input 
                        onChange={handleChange}
                        type="password" 
                        text={loginForm.password}
                        name="password" 
                        placeholder="Password"
                        value={loginForm.password}
                    required/>
                    <i className='bx bxs-lock-alt' ></i>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" className="btn" onClick={handleLogin}>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login;