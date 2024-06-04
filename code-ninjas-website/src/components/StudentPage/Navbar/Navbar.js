import './Navbar.css';
import axios from 'axios';

function Navbar(props) {

    function handleLogout() {
        axios({
            method: "POST",
            url: "/logout"
        })
        .then((response) => {
            console.log("hello")
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
        <div id="NavbarContainer">
            <h1 id="NavbarTitle">Student Dashboard</h1>
            <button id="LogoutButton" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar;