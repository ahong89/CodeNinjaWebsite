import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate();
    const [ incorrectHidden, setIncorrectHidden ] = useState("hide")

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
            setIncorrectHidden("")
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

    function directToSignup(event) {
        navigate("/signup")
    }

    return(
        <div className="LoginContainer">
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
                    <FaUser className="icon"/>
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
                    <FaLock className="icon"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <div id="incorrect-details" className={incorrectHidden}>
                    <p>the login details which you entered are incorrect</p>
                    <br></br>
                </div>

                <button type="submit" className="btn" onClick={handleLogin}>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a onClick={directToSignup}>Register</a></p>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login;