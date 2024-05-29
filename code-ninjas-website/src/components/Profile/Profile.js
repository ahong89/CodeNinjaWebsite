import './Profile.css'
import profilePicture from '../../assets/profilepicture2.jpg'

function Profile(props) {
    return (
        <div id="ProfileContainer">
            <h1 id="ProfileTitle">Profile</h1>
            <div id="UserProfile">
                <img id="ProfilePicture" src={profilePicture} alt="Profile Picture"/>
                <h1 id="Name" className="Description">Andrew Hong</h1>
                <h3 id="Join" className="Description">Joined Mar 2022</h3>
                <br></br>
                <h1 id="NinjaBucks" className="Description">2000 NB</h1>
            </div>
        </div>
    )
}

export default Profile;