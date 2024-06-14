import './StudentProfile.css'
import StudentInputNotes from './StudentInputNotes/StudentInputNotes.js'
import StudentTasks from './StudentTasks/StudentTasks.js'
import StudentPoints from './StudentPoints/StudentPoints.js'
import StudentEntries from './StudentEntries/StudentEntries.js'

function StudentProfile(props) {
    return (
        <div id="StudentProfileContainer">
            <h1 id="StudentProfileTitle">Student Profile: {props.currStudent.name}</h1>
            <div id="StudentDataContainer">
                <div id="StudentNotesMainContainer">
                    <h2 id="StudentDataTitle">Notes</h2>
                    <div id="StudentNotesContainer">
                        <StudentInputNotes updateData={props.updateData} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent} token={props.token} />
                        <StudentEntries updateData={props.updateData} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent} token={props.token}/>
                    </div>
                </div>

                <div id="StudentInfoContainer">
                    <StudentTasks rows={props.currStudent.tasks} />
                    <StudentPoints updateData={props.updateData} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent} token={props.token} />
                </div>
            </div>

        </div>
    )
}

export default StudentProfile;