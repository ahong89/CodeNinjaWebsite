import './TeacherPage.css';
import { useState } from 'react';
import StudentList from './StudentList/StudentList.js'
import StudentProfile from './StudentProfile/StudentProfile.js'
import Navbar from './TeacherNavbar/TeacherNavbar.js'
import axios from 'axios';

function TeacherPage(props) {

  const [ studentData, setStudentData ] = useState(() => getData());
  const [ currStudent, setCurrStudent ] = useState({
    "email": null,
    "name": null,
    "join_date": "6/3/2024",
    "nb": 3,
    "isTeacher": false,
    "tasks": [
        [
            "Complete the weekly prompt",
            "5/30/2024",
            "complete"
        ],
        [
            "Start the unity project",
            "6/2/2024",
            "in progress"
        ]
    ],
    "notes": {
        "rank": "black belt",
        "age": 18,
        "membership": "idk",
        "sensei": "Sensei Nathan",
        "platform": "Unity",
        "dateofbirth": "7/5/2009",
        "lastcontacted": "5 days ago",
        "lastadvanced": "8 days ago",
        "progress": "not good",
        "status": "bad",
        "entries": [
            []
        ]
    }
  })

  function getData() {
      axios({
        method: "GET",
        url: "https://codeninjawebsite.onrender.com/getallstudents",
        headers: {
          Authorization: 'Bearer ' + props.token
        }
      })
      .then((response) => {
        console.log(response.data)
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
      return ([]);
    }

  return (
      <div className="TeacherPage">
        <Navbar removeToken={props.removeToken} setIsAuthenticated={props.setIsAuthenticated} setIsTeacher={props.setIsTeacher}/>
        <div id="TeacherMainContainer">
            <div className="TeacherPageTab">
                <StudentList studentData={studentData} setStudentData={setStudentData} currStudent={currStudent} setCurrStudent={setCurrStudent}/>
            </div>
            <div className="TeacherPageTab">
                <StudentProfile token={props.token} studentData={studentData} updateData={getData} setCurrStudent={setCurrStudent} currStudent={currStudent}/>
            </div>
        </div>
      </div>
  )
}

export default TeacherPage;