import './Signup.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(props) {

    return (
        <div className="SignupContainer">
            <div className="wrapper">
                <form action="">
                    <h1>Sign Up</h1>

                    <div className="input-box">
                    <input 
                            // onChange={handleChange}
                            type="text" 
                            // text={loginForm.password}
                            name="name" 
                            placeholder="Name"
                            // value={loginForm.password}
                        required/>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box">
                        <input
                            // onChange={handleChange}
                            type="email" 
                            // text={loginForm.email}
                            name="email" 
                            placeholder="Email"
                            // value={loginForm.email}
                        required/>
                        <MdEmail className="icon"/>
                    </div>
                    <div className="input-box">
                    <input 
                            // onChange={handleChange}
                            type="password" 
                            // text={loginForm.password}
                            name="password" 
                            placeholder="Password"
                            // value={loginForm.password}
                        required/>
                        <FaLock className="icon" />
                    </div>

                    <button type="submit" className="btn">Register</button>

                </form>
            </div>
        </div>
    );
}

export default Signup;