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

function App() {
  const { token, removeToken, setToken } = useToken();
  const [ isAuthenticated, setIsAuthenticated ] = useState(true);
  const [ isTeacher, setIsTeacher ] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} setAuthentication={setIsAuthenticated} isAuthenticated={isAuthenticated}/>} />
          <Route path="/account-type" element={<AccountType />}/>
          <Route path="/signup" element={<Signup setToken={setToken} setAuthentication={setIsAuthenticated}/>}/>
          <Route path="/student" element={
            <PrivateRoute isAuthenticated={isAuthenticated} isTeacher={isTeacher}
              teacher={<TeacherPage />}
              student={<StudentPage token={token} setIsAuthenticated={setIsAuthenticated} removeToken={removeToken}/>}
              /> 
          }/>
          <Route path="/teacher" element={<TeacherPage/>}/>
          <Route path='/' element={isAuthenticated ? 
              <Navigate to='/student' replace />
            : <Navigate to='/login' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
