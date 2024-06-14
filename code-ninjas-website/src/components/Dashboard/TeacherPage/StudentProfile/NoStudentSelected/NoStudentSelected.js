import './NoStudentSelected.css'

import { MdBlind } from "react-icons/md";


function NoStudentSelected(props) {
    return (
        <div id="StudentProfileContainer">
            <h1 id="StudentProfileTitle">Student Profile</h1>
            <div id="StudentInfoFillerContainer">
                <MdBlind id="StudentInfoFillerIcon" />
                <h1 id="StudentInfoFillerText">No student is selected</h1>
            </div>
        </div>
    )
}

export default NoStudentSelected;