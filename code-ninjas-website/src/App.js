import './App.css';
import StudentPage from './components/StudentPage/StudentPage.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useToken from "./components/useToken.js";

function App() {
  const { token, removeToken, setToken } = useToken();
  
  return (
    <div className="App">
      <StudentPage />
    </div>
  );
}

export default App;
