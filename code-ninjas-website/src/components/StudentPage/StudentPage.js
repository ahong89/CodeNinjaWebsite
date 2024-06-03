import './StudentPage.css';
import React, { useState } from 'react';
import Navbar from './Navbar/Navbar.js'
import Profile from './Profile/Profile.js'
import Tasks from './Tasks/Tasks.js'
import useToken from "../useToken.js";
import axios from 'axios';

function StudentPage(props) {

  const [ userData, setUserData ] = useState(() => getData());

  function getData() {
    axios({
      method: "GET",
      url: "/profile",
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
    <div className="App">
        <Navbar />
        <div id="Main">
            <div className="Tab">
                <Profile userData={userData}/>
            </div>
            <div className="Tab">
                <Tasks userData={userData}/>
            </div>
        </div>
    </div>
  );
}

export default StudentPage;
