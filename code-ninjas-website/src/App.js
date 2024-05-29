import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Profile from './components/Profile/Profile.js'
import Tasks from './components/Tasks/Tasks.js'

function App() {
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
    </div>
  );
}

export default App;
