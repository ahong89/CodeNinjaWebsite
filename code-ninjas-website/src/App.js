import './App.css';
import Login from './components/LoginPage/Login/Login.js'
import Signup from './components/SignupPage/Signup.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useToken from "./components/useToken.js";
import { useState } from 'react';

function App() {
  const { token, removeToken, setToken } = useToken();
  const [ isAuthenticated, setIsAuthenticated ] = useState(token !== null);
  const [ signupAccType, setSignupAccType ] = useState(null);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/login" element={<Login setAccType={setSignupAccType} setToken={setToken} setAuthentication={setIsAuthenticated} isAuthenticated={isAuthenticated}/>} />
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} token={token} setSignupAccType={setSignupAccType} signupAccType={signupAccType}/>}/>
          <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} token={token} setIsAuthenticated={setIsAuthenticated} removeToken={removeToken}/>}/>
          <Route path='/' element={isAuthenticated ? 
              <Navigate to='/dashboard' replace />
            : <Navigate to='/login' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
