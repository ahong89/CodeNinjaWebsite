import { useState } from 'react';
import axios from 'axios';

import PrivateRoute from './PrivateRoute.js'
import TeacherPage from './TeacherPage/TeacherPage.js'
import StudentPage from './StudentPage/StudentPage.js'

function Dashboard(props) {
    const [ isTeacher, setIsTeacher ] = useState(getAccType(props.token))

    function getAccType(token) {
        axios({
          method: "GET",
          url: process.env.REACT_APP_BACKEND_IP + "/getacctype",
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((response) => {
          setIsTeacher(response.data['isTeacher'])
          return response.data['isTeacher']
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
        return null;
      }

    return (
        <>
            <PrivateRoute isAuthenticated={props.isAuthenticated} isTeacher={isTeacher}
                teacher={<TeacherPage token={props.token} setIsAuthenticated={props.setIsAuthenticated} removeToken={props.removeToken} setIsTeacher={setIsTeacher}/>}
                student={<StudentPage token={props.token} setIsAuthenticated={props.setIsAuthenticated} removeToken={props.removeToken} setIsTeacher={setIsTeacher}/>}
                /> 
        </>
    );
}

export default Dashboard;
