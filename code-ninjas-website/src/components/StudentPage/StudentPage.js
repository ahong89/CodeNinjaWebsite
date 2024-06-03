import './StudentPage.css';
import Navbar from './Navbar/Navbar.js'
import Profile from './Profile/Profile.js'
import Tasks from './Tasks/Tasks.js'
import Progress from './Progress/Progress.js'
import useToken from "../useToken.js";

function StudentPage() {

  return (
    <div className="App">
      <Navbar />
      <div id="Main">
          <div className="Tab">
              <Profile />
          </div>
          <div className="Tab">
              <Tasks/>
          </div>
      </div>
      <div className="Tab" id="Progress">
        <Progress />
      </div>
    </div>
  );
}

export default StudentPage;
