import './StudentProfile.css';
import { useState } from 'react';
import axios from 'axios';

function StudentProfile(props) {
    return (
        <div id="StudentProfileContainer">
            {props.currStudent === null ?
                <NoStudentSelected />
                : <StudentInfo token={props.token} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent}/>
            }
        </div>
    )
}

function NoStudentSelected(props) {
    return (
        <div>
            <h1 id="StudentProfileTitle">Student Profile</h1>
            <h1>No student is currently selected</h1>
        </div>
    )
}

function StudentInfo(props) {
    const [ incrementNB, setIncrementNB ] = useState(0)

    function handleNBIncrement(event) {
        let newnb = Number(incrementNB) + Number(props.currStudent.nb)
        axios({
            method: "POST",
            url: "/setnb",
            headers: {
              Authorization: 'Bearer ' + props.token
            },
            data: {
                email: props.currStudent.email,
                nb: newnb
            }
          })
          .then((response) => {
            let newStudentData = props.currStudent
            newStudentData.nb = newnb
            console.log(newStudentData)
            props.setCurrStudent(newStudentData)
            const res = response.data
            return res
          }).catch((error) => {
            if (error.response) {
              console.log(error.response)
              console.log(error.response.status)
              console.log(error.response.headers)
            }
          })
    }

    return(
        <div>
            <h1 id="StudentProfileTitle">Student Profile: {props.currStudent.name}</h1>
            <div id="StudentInfoContainer">
                <div id="StudentTasksContainer">
                    <h2 id="StudentTaskListTitle">Tasks</h2>
                    <table id="StudentTaskList">
                        <thead>
                            <tr id="StudentTaskListHeader">
                                <th>TASK NAME</th>
                                <th>DUE DATE</th>
                                <th>COMPLETION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.currStudent.tasks?.map((rowContent, rowID) => (
                            <TableRow
                                rowContent={rowContent}
                                key={rowID}
                            />
                            ))}
                        </tbody>
                    </table>
                    <button className="TeacherButton" id="TaskEditorButton">Edit Tasks</button>
                </div>

                <div id="StudentPointsMainContainer">
                    <h2 id="StudentPointsTitle">Points</h2>
                    <div id="StudentPointsContainer">
                        <h3 id="StudentPoints">{props.currStudent.nb} NB</h3>
                    </div>
                    
                    <div id="StudentPointEditorContainer">
                        <input
                        onChange={(e) => setIncrementNB(e.target.value)}
                        type="text" 
                        text={incrementNB}
                        name="StudentPointEditorInput" 
                        placeholder="Points"
                        value={incrementNB}
                        required/>
                        <button className="TeacherButton" id="StudentPointEditorButton" onClick={handleNBIncrement}>Update NB</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TableRow(props) {
    let row = props.rowContent;
    return (
        <tr className="StudentTask">
            {row?.map((val, rowID) => (
                <th key={rowID}>{val}</th>
            ))}
        </tr>
    );
}

export default StudentProfile;