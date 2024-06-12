import './StudentProfile.css';
import StudentProfileNotes from './StudentProfileNotes/StudentProfileNotes.js';
import { FaHotTubPerson } from "react-icons/fa6";
import { FaPersonFalling } from "react-icons/fa6";
import { FaBlind } from "react-icons/fa";
import { MdBlind } from "react-icons/md";
import { LiaBlindSolid } from "react-icons/lia";
import { useState } from 'react';
import axios from 'axios';

function StudentProfile(props) {
    return (
        <div id="StudentProfileContainer">
            {props.currStudent === null ?
                <NoStudentSelected />
                : <StudentInfo token={props.token} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent} updateData={props.updateData} />
            }
        </div>
    )
}

function NoStudentSelected(props) {
    return (
        <div id="StudentProfileMainContainer">
            <h1 id="StudentProfileTitle">Student Profile</h1>
            <div id="StudentInfoFillerContainer">
                <MdBlind id="StudentInfoFillerIcon" />
                <h1 id="StudentInfoFillerText">No student is selected</h1>
            </div>
        </div>
    )
}

function StudentInfo(props) {
    const [incrementNB, setIncrementNB] = useState(0)

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
                props.updateData()
                props.setCurrStudent(prevState => ({
                    ...prevState,
                    nb: newnb
                }))
                return response.data
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }

    return (
        <div id="StudentProfileMainContainer">
            <h1 id="StudentProfileTitle">Student Profile: {props.currStudent.name}</h1>
            <div id="StudentDataContainer">
                <div id="StudentNotesMainContainer">
                    <h2 id="StudentDataTitle">Information</h2>
                    <div id="StudentNotesContainer">
                        <div id="StudentNotesInputContainer">
                            <div id="StudentInformationContainer">
                                <div>
                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Rank</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="Black Belt" required />
                                    </div>

                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Age</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="18" required />
                                    </div>

                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Membership</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="Standard" required />
                                    </div>

                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Sensei</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="Sensei Kim" required />
                                    </div>

                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Platform</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="Unity" required />
                                    </div>
                                </div>

                                <div>
                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Date of birth</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="03/22/2010" required />
                                    </div>

                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Last contacted</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="06/05/2024" required />
                                    </div>

                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Last advanced</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="06/02/2024" required />
                                    </div>

                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Progress</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="Steady" required />
                                    </div>

                                    <div className="StudentNotesInput">
                                        <h3 className="StudentNotesInputTitle">Status</h3>
                                        <input className="StudentNotesInputBox" type="text" placeholder="Doing great" required />
                                    </div>
                                </div>
                            </div>

                            <button className="TeacherButton" id="EditInfoButton">Edit</button>
                        </div>

                        <div id="StudentTextNotesContainer">
                            <StudentProfileNotes />
                        </div>
                    </div>
                </div>

                <div id="StudentInfoContainer">
                    <div id="StudentTasksContainer">
                        <h2 id="StudentTaskListTitle">Tasks</h2>
                        <table id="StudentTaskList">
                            <thead>
                                <tr id="StudentTaskListHeader">
                                    <th id="StudentTaskName">TASK NAME</th>
                                    <th id="StudentTaskDueDate">DUE DATE</th>
                                    <th id="StudentTaskCompletion">COMPLETION</th>
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
                                required />
                            <button className="TeacherButton" id="StudentPointEditorButton" onClick={handleNBIncrement}>Update NB</button>
                        </div>
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