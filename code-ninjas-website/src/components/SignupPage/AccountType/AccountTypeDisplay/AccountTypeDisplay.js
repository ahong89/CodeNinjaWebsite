import './AccountTypeDisplay.css';
import React, { useState } from 'react';

function AccountTypeDisplay(props) {
  
    return (
      <div id="AccountTypeDisplayContainer">
        <h1 id="AccountTypeTitle">Choose your account type</h1>
        <div id="AccountTypeContainer">
            <div className="AccountTypeTab" id="StudentAccountType">
                <h2>Student</h2>
            </div>

            <div className="AccountTypeTab" id="TeacherAccountType">
                <h2>Teacher</h2>
            </div>
        </div>
      </div>
    );
  }
  
  export default AccountTypeDisplay;
  