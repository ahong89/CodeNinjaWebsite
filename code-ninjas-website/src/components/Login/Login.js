import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calculator from '../Calculator/Calculator';
import LoginPage from '../LoginPage/LoginPage.js'
import useToken from '../useToken.js'

function Login() {
  const { token, removeToken, setToken } = useToken();

  return(
    <div>
        <BrowserRouter>
          {token?
            (
              <>
                <Routes>
                  <Route path="/calculator" element={<Calculator/>}></Route>
                </Routes>
              </>
            )
            : <>
              <LoginPage setToken={setToken} />
              <h1>{token}</h1>
            </>
          }
        </BrowserRouter>
    </div>
  )
}

export default Login;

