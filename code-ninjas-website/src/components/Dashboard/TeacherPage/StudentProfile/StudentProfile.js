import './StudentProfile.css'
import StudentInputNotes from './StudentInputNotes/StudentInputNotes.js'
import StudentNotesTable from './StudentNotesTable/StudentNotesTable.js'
import StudentTasks from './StudentTasks/StudentTasks.js'
import StudentPoints from './StudentPoints/StudentPoints.js'

import { FaHotTubPerson } from "react-icons/fa6";
import { FaPersonFalling } from "react-icons/fa6";
import { FaBlind } from "react-icons/fa";
import { LiaBlindSolid } from "react-icons/lia";


function StudentProfile(props) {
    return (
        <div id="StudentProfileContainer">
            <h1 id="StudentProfileTitle">Student Profile: {props.currStudent.name}</h1>
            <div id="StudentDataContainer">
                <div id="StudentNotesMainContainer">
                    <h2 id="StudentDataTitle">Notes</h2>
                    <div id="StudentNotesContainer">
                        <StudentInputNotes updateData={props.updateData} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent} token={props.token}/>
                        <div id="StudentTextNotesContainer">
                            <StudentNotesTable />
                        </div>
                    </div>
                </div>

                <div id="StudentInfoContainer">
                    <StudentTasks currStudent={props.currStudent}/>
                    <StudentPoints updateData={props.updateData} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent} token={props.token}/>
                </div>
            </div>

        </div>
    )
}

export default StudentProfile;