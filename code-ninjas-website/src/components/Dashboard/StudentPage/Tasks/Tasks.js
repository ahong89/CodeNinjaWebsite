import './Tasks.css'
import TasksModal from '../TasksModal/TasksModal.js'

import { useState } from 'react';
import axios from 'axios';
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";


function Tasks(props) {
    let body = props.userData.tasks;
    const [modalOpen, setModalOpen] = useState(false);
    const [rowToEdit, setRowToEdit] = useState(null);

    function updateDb(newStudent) {
        axios({
            method: "POST",
            url: process.env.REACT_APP_BACKEND_IP + "/submitlink",
            headers: {
                Authorization: 'Bearer ' + props.token
            },
            data: {
                email: props.userData.email,
                tasks: newStudent.tasks
            }
        })
        .then((response) => {
            props.setUserData(newStudent)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    const handleEditSubmission = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
        console.log(idx)
    };

    const handleSubmit = (newRow) => {
        let newStudent = {...props.userData}
        newStudent.tasks = props.userData.tasks?.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            let output = {...currRow, ...newRow, ...{completion: "Complete"}}
            return output
        })
        updateDb(newStudent)
    };

    function getCurrentLink() {
        console.log("hello")
        console.log(props.userData.tasks[rowToEdit].name)
        return props.userData.tasks[rowToEdit].name
    }

    return (
        <div id="TasksContainer">
            <div id="TaskTitleContainer">
                <h1 id="TaskTitle">Tasks</h1>
                <BsListTask id="TaskListIcon" />
            </div>

            <div id="TaskListContainer">
                <table id="TaskList">
                    <thead>
                        <tr id="TaskListHeader">
                            <th id="TaskName">TASK NAME</th>
                            <th id="TaskDate">DUE DATE</th>
                            <th id="TaskCompletion">COMPLETION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {body?.map((rowContent, rowID) => (
                            <TableRow
                                rowContent={rowContent}
                                key={rowID}
                                handlePress={() => handleEditSubmission(rowID)}
                            />
                        ))}
                    </tbody>
                </table>
                {modalOpen && (
                    <TasksModal
                        closeModal={() => {
                            setModalOpen(false);
                            setRowToEdit(null);
                        }}
                        onSubmit={handleSubmit}
                        defaultValue={""}
                        taskName={props.userData.tasks[rowToEdit].name}
                    />
                )}
            </div>
        </div>
    )
}

function TableRow(props) {
    let row = props.rowContent;
    return (
        <tr className="Task" onClick={() => props.handlePress()}>
            {/* {Object.keys(row)?.map((key, rowID) => (
                <th key={rowID}>{row[key]}</th>
            ))} */}
            <th>{row.name}</th>
            <th>{row.date}</th>
            <th>{row.completion}</th>
        </tr>
    );
}

export default Tasks;