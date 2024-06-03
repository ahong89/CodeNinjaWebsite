import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Profile from './components/Profile/Profile.js'
import Tasks from './components/Tasks/Tasks.js'
import Login from './components/Login.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useToken from "./components/useToken.js";

function App() {
  const { token, removeToken, setToken } = useToken();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              { token ?
              (
                <>
                  <Routes>
                    <Route path="/student" element={
                    <>
                      <Navbar />
                      <div id="Main">
                        <div className="Tab">
                          <Profile />
                        </div>
                        <div className="Tab">
                          <Tasks/>
                        </div>
                      </div>
                    </>}></Route>
                  </Routes>
                </>
              ) : (
                <>
                  <LoginPage setToken={setToken} />
                  <h1>{token}</h1>
                </>
              )
              }
            </>
          }/>
          <Route path="/login" element={
            <>
              <Login />
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
