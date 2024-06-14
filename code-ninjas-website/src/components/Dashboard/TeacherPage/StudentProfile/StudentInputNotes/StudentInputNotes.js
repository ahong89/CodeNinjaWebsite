import StudentInformationInput from './StudentInformationInput.js'

import { useState } from 'react';
import axios from 'axios';

function StudentInputNotes(props) {
    const [ editMode, setEditMode ] = useState(false)

    function handleEditStudentInformation() {
        if(editMode) {
            axios({
                method: "POST",
                url: process.env.REACT_APP_BACKEND_IP + "/setnotes",
                headers: {
                    Authorization: 'Bearer ' + props.token
                },
                data: {
                    email: props.currStudent.email, 
                    notes: props.currStudent.notes
                }
            })
            .then((response) => {
                props.updateData("notes", props.currStudent.notes)
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

            <button className="TeacherButton" id="EditInfoButton" onClick={handleEditStudentInformation}>{editMode ? "Confirm" : "Edit"}</button>
        </div>
    )
}

export default StudentInputNotes;