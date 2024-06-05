import './TeacherPage.css';
import { useState } from 'react';
import StudentList from './StudentList/StudentList.js'
import StudentProfile from './StudentProfile/StudentProfile.js'
import Navbar from './TeacherNavbar/TeacherNavbar.js'
import axios from 'axios';

function TeacherPage(props) {

    const [ studentData, setStudentData ] = useState(() => getData);

    function getData() {
        axios({
          method: "GET",
          url: "/getallstudents",
          headers: {
            Authorization: 'Bearer ' + props.token
          }
        })
        .then((response) => {
          const res = response.data
          res.access_token && props.setToken(res.access_token)
          setStudentData(res)
          return res
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
        return ({});
      }

    return (    
        <div className="TeacherPage">
          <Navbar removeToken={props.removeToken} setIsAuthenticated={props.setIsAuthenticated}/>
          <div id="MainContainer">
              <div className="Tab">
                  <StudentList studentData={studentData}/>
              </div>
              <div className="Tab">
                  <StudentProfile studentData={studentData}/>
              </div>
          </div>
        </div>
    )
}

export default TeacherPage;