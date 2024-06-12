import './TeacherSignup.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherSignup(props) {
    const navigate = useNavigate();

    const [signupForm, setSignupForm] = useState({
        name: "",
        email: "",
        password: "",
        code: ""
    })

    function handleChange(event) { 
        const {value, name} = event.target
        setSignupForm(prevNote => ({
            ...prevNote, [name]: value})
        )
    }

    function handleSignup(event) {
      if(signupForm.code !== "6960") {
        console.log("Incorrect passcode")
        navigate('/signup');
        event.preventDefault(); 
        return;
      }
      axios({
          method: "POST",
          url:"https://codeninjawebsite.onrender.com/signup",
          data:{
              name: signupForm.name,
              email: signupForm.email,
              password: signupForm.password,
              isTeacher: true
          }
        })
        .then((response) => {
          axios({
              method: "POST",
              url:"https://codeninjawebsite.onrender.com/token",
              data:{
                email: signupForm.email,
                password: signupForm.password
              }
            })
            .then((response) => {
              props.setToken(response.data.access_token)
              props.setAuthentication(true)
              navigate('/dashboard')
            }).catch((error) => {
              if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
                console.log(props.isAuthenticated)
              }
              navigate('/login')
            }
          )
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

    return (
        <div className="SignupContainer">
            <div className="wrapper">
                <form action="">
                    <h1>Sign Up</h1>

                    <div className="input-box">
                    <input 
                            onChange={handleChange}
                            type="text" 
                            text={signupForm.name}
                            name="name" 
                            placeholder="Name"
                            value={signupForm.name}
                        required/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            onChange={handleChange}
                            type="email" 
                            text={signupForm.email}
                            name="email" 
                            placeholder="Email"
                            value={signupForm.email}
                        required/>
                        <MdEmail className="icon"/>
                    </div>
                    <div className="input-box">
                    <input 
                            onChange={handleChange}
                            type="password" 
                            text={signupForm.password}
                            name="password" 
                            placeholder="Password"
                            value={signupForm.password}
                        required/>
                        <FaLock className="icon" />
                    </div>
                    <div className="input-box">
                    <input 
                            onChange={handleChange}
                            type="password" 
                            text={signupForm.code}
                            name="code" 
                            placeholder="Teacher Code"
                            value={signupForm.code}
                        required/>
                        <IoBookSharp className="icon" />
                    </div>

                    <button type="submit" className="btn" onClick={handleSignup}>Register</button>

                </form>
            </div>
        </div>
    );
}

export default TeacherSignup;