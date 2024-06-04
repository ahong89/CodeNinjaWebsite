import './AccountTypeDisplay.css';
import { IoBookSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import React, { useState } from 'react';

function AccountTypeDisplay(props) {
  
    return (
      <div id="MainAccountTypeContainer">
        <div id="AccountTypeDisplayContainer">
            <h1 id="AccountTypeTitle">Choose your account type</h1>
            <div id="AccountTypeContainer">
                <div className="AccountTypeTab" id="StudentAccountType">
                    <div className="IconContainer" id="StudentIconContainer">
                        <FaUser id="StudentIcon"/>
                    </div>
                    <div className="TitleContainer" id="StudentTitleContainer">
                        <h2>Student</h2>
                    </div>
                </div>

                <div className="AccountTypeTab" id="TeacherAccountType">
                    <div className="IconContainer" id="TeacherIconContainer">
                        <IoBookSharp id="TeacherIcon"/>
                    </div>
                    <div className="TitleContainer" id="TeacherTitleContainer">
                        <h2>Teacher</h2>
                    </div>
                </div>
            </div>
            <div id="LoginLink">
                <p>Already have an account? <a>Login</a></p>
            </div>
        </div>
      </div>
    );
  }
  
  export default AccountTypeDisplay;
  