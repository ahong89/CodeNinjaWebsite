import './App.css';
import StudentPage from './components/StudentPage/StudentPage.js'
import Login from './components/LoginPage/Login/Login.js'
import Signup from './components/SignupPage/Signup/Signup.js'
import AccountType from './components/SignupPage/AccountType/AccountType.js'
import PrivateRoute from './components/LoginPage/PrivateRoute.js'
import TeacherPage from './components/TeacherPage/TeacherPage.js'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useToken from "./components/useToken.js";
import { useState } from 'react';
import axios from 'axios';

function App() {
  const { token, removeToken, setToken } = useToken();
  const [ isAuthenticated, setIsAuthenticated ] = useState(token !== null);
  const [ isTeacher, setIsTeacher ] = useState(token && getAccType(token))

  function getAccType(token) {
    axios({
      method: "GET",
      url: "/getacctype",
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
    return (false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setIsTeacher={getAccType} setToken={setToken} setAuthentication={setIsAuthenticated} isAuthenticated={isAuthenticated}/>} />
          <Route path="/account-type" element={<AccountType />}/>
          <Route path="/signup" element={<Signup setToken={setToken} setAuthentication={setIsAuthenticated}/>}/>
          <Route path="/dashboard" element={
            <PrivateRoute isAuthenticated={isAuthenticated} isTeacher={isTeacher}
              teacher={<TeacherPage token={token} setIsAuthenticated={setIsAuthenticated} removeToken={removeToken}/>}
              student={<StudentPage token={token} setIsAuthenticated={setIsAuthenticated} removeToken={removeToken}/>}
              /> 
          }/>
          <Route path='/' element={isAuthenticated ? 
              <Navigate to='/dashboard' replace />
            : <Navigate to='/login' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
