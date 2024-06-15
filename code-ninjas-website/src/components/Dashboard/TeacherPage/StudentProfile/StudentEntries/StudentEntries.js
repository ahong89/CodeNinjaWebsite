import StudentNotesModal from '../StudentNotesModal/StudentNotesModal.js'
import StudentNotesTable from '../StudentNotesTable/StudentNotesTable.js'

import { useState } from 'react'
import axios from 'axios';

function StudentEntries(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [rowToEdit, setRowToEdit] = useState(null);

    function updateDb(newStudent) {
        axios({
            method: "POST",
            url: process.env.REACT_APP_BACKEND_IP + "/setnotes",
            headers: {
                Authorization: 'Bearer ' + props.token
            },
            data: {
                email: props.currStudent.email,
                notes: newStudent.notes
            }
        })
        .then((response) => {
            props.setCurrStudent(newStudent)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    const handleDeleteRow = (targetIndex) => {
        let newStudent = {...props.currStudent}
        let newEntries = []
        props.currStudent.notes.entries?.map((currRow, idx) => {
            if (idx !== targetIndex) newEntries.push(currRow)
        })
        newStudent.notes.entries = newEntries
        console.log(newEntries)
        updateDb(newStudent)
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        let newStudent = {...props.currStudent}
        if(rowToEdit === null) {
            newStudent.notes.entries.unshift(newRow)
        } else {
            newStudent.notes.entries = props.currStudent.notes.entries?.map((currRow, idx) => {
                if (idx !== rowToEdit) return currRow;
                return newRow
            })
        }
        updateDb(newStudent)
    };

    return (
        <div id="StudentTextNotesContainer">
            <div id="StudentNotesTableMainContainer">
                <StudentNotesTable rows={props.currStudent.notes.entries} deleteRow={handleDeleteRow} editRow={handleEditRow} />
                <button onClick={() => setModalOpen(true)} className="TeacherButton" id="AddNotesButton">
                    Add Note
                </button>
            </div>

            {modalOpen && (
                <StudentNotesModal
                    closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && props.currStudent.notes.entries[rowToEdit]}
                />
            )}
        </div>
    )
}

export default StudentEntries;