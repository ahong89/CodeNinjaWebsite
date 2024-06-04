import './Profile.css'
import profilePicture from '../../../assets/profilepicture4.png'

function Profile(props) {
    return (
        <div id="ProfileContainer">
            <h1 id="ProfileTitle">Profile</h1>
            <div id="UserProfile">
                <div id="ProfilePictureContainer">
                    <img src={profilePicture} id="ProfilePicture" alt="Profile Picture"/>
                </div>
                <h1 id="Name" className="Description">Andrew Hong</h1>
                <h3 id="Join" className="Description">Joined March 2022</h3>
                <h1 id="NinjaBucks" className="Description">2000 NB</h1>
            </div>
        </div>
    )
}

export default Profile;