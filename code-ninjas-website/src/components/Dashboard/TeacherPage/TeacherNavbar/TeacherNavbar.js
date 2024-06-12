import './TeacherNavbar.css';
import { FaUserNinja } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import axios from 'axios';

function TeacherNavbar(props) {

    function handleLogout() {
        axios({
            method: "POST",
            url: "https://codeninjawebsite.onrender.com/logout"
        })
        .then((response) => {
            props.removeToken()
            props.setIsAuthenticated(false)
            props.setIsTeacher(null)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
                console.log(props.isAuthenticated)
            }
        })
    }

    return (
        <div id="TeacherNavbarContainer">
            <FaChalkboardTeacher id="TeacherNavbarIcon"/>
            <h1 id="TeacherNavbarTitle">Teacher Dashboard</h1>
            <button id="TeacherLogoutButton" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default TeacherNavbar;