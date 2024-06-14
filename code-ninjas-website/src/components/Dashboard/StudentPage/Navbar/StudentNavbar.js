import './StudentNavbar.css';
import { FaUserNinja } from "react-icons/fa";
import axios from 'axios';

function StudentNavbar(props) {

    function handleLogout() {
        axios({
            method: "POST",
            url: process.env.REACT_APP_BACKEND_IP + "/logout"
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
        <div id="StudentNavbarContainer">
            <FaUserNinja id="StudentNavbarIcon"/>
            <h1 id="StudentNavbarTitle">Student Dashboard</h1>
            <button id="StudentLogoutButton" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default StudentNavbar;