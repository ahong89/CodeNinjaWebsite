import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Profile from './components/Profile/Profile.js'
import Tasks from './components/Tasks/Tasks.js'
import Login from './components/Login.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
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
