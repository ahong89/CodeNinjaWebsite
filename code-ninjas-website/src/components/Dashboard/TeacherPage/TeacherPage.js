import './TeacherPage.css';
import StudentList from './StudentList/StudentList.js'
import StudentProfile from './StudentProfile/StudentProfile.js'
import Navbar from './TeacherNavbar/TeacherNavbar.js'
import NoStudentSelected from './StudentProfile/NoStudentSelected/NoStudentSelected.js';

import { useState } from 'react';
import axios from 'axios';

function TeacherPage(props) {

  const [studentData, setStudentData] = useState(() => getData());
  const [ filteredStudents, setFilteredStudents ] = useState({})
  const [currStudent, setCurrStudent] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url: process.env.REACT_APP_BACKEND_IP + "/getallstudents",
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    })
    .then((response) => {
      const res = response.data
      res.access_token && props.setToken(res.access_token)
      console.log(res)
      setStudentData(res)
      setFilteredStudents(res)
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

  function updateData(attr, value) {
    let newData = {}
    let currStudentCopy = { ...currStudent }
    currStudentCopy[attr] = value
    newData[currStudent.name] = currStudentCopy
    setStudentData(prevStudentData => ({ ...prevStudentData, ...newData }))
  }

  return (
    <div id="TeacherPageContainer">
      <div className="TeacherPage">
        <Navbar removeToken={props.removeToken} setIsAuthenticated={props.setIsAuthenticated} setIsTeacher={props.setIsTeacher} />
        <div id="TeacherMainContainer">
          <div className="TeacherPageTab">
            <StudentList filteredStudents={filteredStudents} setFilteredStudents={setFilteredStudents} studentData={studentData} setStudentData={setStudentData} currStudent={currStudent} setCurrStudent={setCurrStudent} />
          </div>
          <div className="TeacherPageTab">
            {currStudent === null ?
              <NoStudentSelected />
              : <StudentProfile token={props.token} currStudent={currStudent} setCurrStudent={setCurrStudent} updateData={updateData} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherPage;