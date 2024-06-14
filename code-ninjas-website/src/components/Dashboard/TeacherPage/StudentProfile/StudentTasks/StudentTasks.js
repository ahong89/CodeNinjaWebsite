import './StudentTasks.css'
import StudentTasksTable from '../StudentTasksTable/StudentTasksTable.js'
import StudentTasksModal from '../StudentTasksModal/StudentTasksModal.js'

import { useState } from 'react';

function StudentTasks(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            name: "Complete this project",
            date: "06/24/2024",
            completion: "in progress",
        },
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        rowToEdit === null
            ? setRows([...rows, newRow])
            : setRows(
                rows?.map((currRow, idx) => {
                    if (idx !== rowToEdit) return currRow;

                    return newRow;
                })
            );
    };

    return (
        <div id="StudentTasksMainContainer">
            <div id="StudentTasksContainer">
                <StudentTasksTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
                <button onClick={() => setModalOpen(true)} className="TeacherButton" id="AddNotesButton">
                    Add Task
                </button>
            </div>

            {modalOpen && (
                <StudentTasksModal
                    closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
            )}
        </div>
    );
}

export default StudentTasks;