import './StudentPage.css';
import React, { useState } from 'react';
import Navbar from './Navbar/StudentNavbar.js'
import Profile from './Profile/Profile.js'
import Tasks from './Tasks/Tasks.js'
import Progress from './Progress/Progress.js'
import useToken from "../../useToken.js";
import axios from 'axios';

function StudentPage(props) {

  const [ userData, setUserData ] = useState(() => getData());

  function getData() {
    console.log(props.token)
    axios({
      method: "GET",
      url: process.env.REACT_APP_BACKEND_IP + "/profile",
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    })
    .then((response) => {
      const res = response.data
      res.access_token && props.setToken(res.access_token)
      setUserData(res)
      return res
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
    return ({
      name: "name",
      join_date: "join date",
      nb: "0",
      tasks: []
    });
  }

  return (
    <div className="StudentPageMain">
        <Navbar removeToken={props.removeToken} setIsAuthenticated={props.setIsAuthenticated} setIsTeacher={props.setIsTeacher}/>
        <div id="StudentPageMainContainer">
            <div className="StudentPageTab">
                <Profile userData={userData}/>
            </div>
            <div className="StudentPageTab">
                <Tasks userData={userData} setUserData={setUserData} token={props.token}/>
            </div>
        </div>
        <div className="StudentPageTab" id="Progress">
          <Progress />
        </div>
    </div>
  );
}

export default StudentPage;
