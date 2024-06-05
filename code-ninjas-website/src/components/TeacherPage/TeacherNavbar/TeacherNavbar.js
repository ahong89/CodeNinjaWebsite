import './TeacherNavbar.css';
import axios from 'axios';

function TeacherNavbar(props) {

    function handleLogout() {
        axios({
            method: "POST",
            url: "/logout"
        })
        .then((response) => {
            props.removeToken()
            props.setIsAuthenticated(false)
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
            <h1 id="TeacherNavbarTitle">Teacher Dashboard</h1>
            <button id="TeacherLogoutButton" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default TeacherNavbar;