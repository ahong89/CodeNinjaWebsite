import './TeacherPage.css';
import { useState } from 'react';
import StudentList from './StudentList/StudentList.js'
import StudentProfile from './StudentProfile/StudentProfile.js'
import Navbar from './TeacherNavbar/TeacherNavbar.js'
import axios from 'axios';

function TeacherPage(props) {

  const [ studentData, setStudentData ] = useState(() => getData());
  const [ currStudent, setCurrStudent ] = useState(null)

  function getData() {
      axios({
        method: "GET",
        url: "/getallstudents",
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
        <Navbar removeToken={props.removeToken} setIsAuthenticated={props.setIsAuthenticated}/>
        <div id="MainContainer">
            <div className="Tab">
                <StudentList studentData={studentData} setCurrStudent={setCurrStudent}/>
            </div>
            <div className="Tab">
                <StudentProfile token={props.token} studentData={studentData} setCurrStudent={setCurrStudent} currStudent={currStudent}/>
            </div>
        </div>
        <button onClick={() => console.logx(currStudent)}>Click me</button>
      </div>
  )
}

export default TeacherPage;