import './StudentProfile.css';
import StudentProfileNotes from './StudentProfileNotes/StudentProfileNotes.js';
import StudentInformationInput from './StudentProfileNotes/StudentInformationInput/StudentInformationInput.js'
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
            {props.currStudent.name === null ?
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
    const [ incrementNB, setIncrementNB ] = useState(0)
    const [ editMode, setEditMode ] = useState(false)

    function handleNBIncrement(event) {
        let newnb = Number(incrementNB) + Number(props.currStudent.nb)
        axios({
            method: "POST",
            url: "https://codeninjawebsite.onrender.com/setnb",
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

    function handleEditStudentInformation() {
        if(editMode) {
            axios({
                method: "POST",
                url: "https://codeninjawebsite.onrender.com/setnotes",
                headers: {
                    Authorization: 'Bearer ' + props.token
                },
                data: {
                    email: props.currStudent.email, 
                    notes: props.currStudent.notes
                }
            })
            .then((response) => {
                props.updateData()
                setEditMode(!editMode)
                return true
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
        }
        setEditMode(!editMode)
        return false
    }

    function changeNoteValue(attribute, newValue) {
        let notesCopy = {...props.currStudent.notes}
        notesCopy[attribute] = newValue
        props.setCurrStudent(currStudent => ({
            ...currStudent,
            notes: notesCopy
        }))
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
                                    <StudentInformationInput title={"Rank"} attribute={"rank"} readOnly={!editMode} data={props.currStudent.notes.rank} setData={changeNoteValue}/>
                                    <StudentInformationInput title={"Age"} attribute={"age"} readOnly={!editMode} data={props.currStudent.notes.age} setData={changeNoteValue}/>
                                    <StudentInformationInput title={"Membership"} attribute={"membership"} readOnly={!editMode} data={props.currStudent.notes.membership} setData={changeNoteValue}/>
                                    <StudentInformationInput title={"Sensei"} attribute={"sensei"} readOnly={!editMode} data={props.currStudent.notes.sensei} setData={changeNoteValue}/>
                                    <StudentInformationInput title={"Platform"} attribute={"platform"} readOnly={!editMode} data={props.currStudent.notes.platform} setData={changeNoteValue}/>
                                </div>

                                <div>
                                    <StudentInformationInput title={"Date of birth"} attribute={"dateofbirth"} readOnly={!editMode} data={props.currStudent.notes.dateofbirth} setData={changeNoteValue}/>
                                    <StudentInformationInput title={"Last contacted"} attribute={"lastcontacted"} readOnly={!editMode} data={props.currStudent.notes.lastcontacted} setData={changeNoteValue}/>
                                    <StudentInformationInput title={"Last advanced"} attribute={"lastadvanced"} readOnly={!editMode} data={props.currStudent.notes.lastadvanced} setData={changeNoteValue}/>
                                    <StudentInformationInput title={"Progress"} attribute={"progress"} readOnly={!editMode} data={props.currStudent.notes.progress} setData={changeNoteValue}/>
                                    <StudentInformationInput title={"Status"} attribute={"status"} readOnly={!editMode} data={props.currStudent.notes.status} setData={changeNoteValue}/>
                                </div>
                            </div>

                            <button className="TeacherButton" id="EditInfoButton" onClick={handleEditStudentInformation}>{editMode ? "Submit" : "Edit"}</button>
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