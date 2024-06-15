import './StudentTasks.css'
import StudentTasksTable from '../StudentTasksTable/StudentTasksTable.js'
import StudentTasksModal from '../StudentTasksModal/StudentTasksModal.js'

import { useState } from 'react';
import axios from 'axios';

function StudentTasks(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [rowToEdit, setRowToEdit] = useState(null);

    function updateDb(newStudent) {
        axios({
            method: "POST",
            url: process.env.REACT_APP_BACKEND_IP + "/settasks",
            headers: {
                Authorization: 'Bearer ' + props.token
            },
            data: {
                email: props.currStudent.email,
                tasks: newStudent.tasks
            }
        })
        .then((response) => {
            props.setCurrStudent(newStudent)
            props.updateData("tasks", newStudent.tasks)
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
        let newTasks = []
        props.currStudent.tasks?.map((currRow, idx) => {
            if (idx !== targetIndex) newTasks.push(currRow)
        })
        newStudent.tasks = newTasks
        updateDb(newStudent)
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        let newStudent = {...props.currStudent}
        if(rowToEdit === null) {
            newStudent.tasks.unshift(newRow)
        } else {
            newStudent.tasks = props.currStudent.tasks?.map((currRow, idx) => {
                if (idx !== rowToEdit) return currRow;
                return newRow
            })
        }
        updateDb(newStudent)
    };

    return (
        <div id="StudentTasksMainContainer">
            <StudentTasksTable rows={props.currStudent.tasks} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <button onClick={() => setModalOpen(true)} className="TeacherButton" id="AddNotesButton">
                Add Task
            </button>

            {modalOpen && (
                <StudentTasksModal
                    closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && props.currStudent.tasks[rowToEdit]}
                />
            )}
        </div>
    );
}

export default StudentTasks;