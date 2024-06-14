import './StudentProfile.css'
import StudentInputNotes from './StudentInputNotes/StudentInputNotes.js'
import StudentNotesTable from './StudentNotesTable/StudentNotesTable.js'
import StudentTasks from './StudentTasks/StudentTasks.js'
import StudentPoints from './StudentPoints/StudentPoints.js'
import StudentNotesModal from './StudentNotesModal/StudentNotesModal.js'

import { FaHotTubPerson } from "react-icons/fa6";
import { FaPersonFalling } from "react-icons/fa6";
import { FaBlind } from "react-icons/fa";
import { LiaBlindSolid } from "react-icons/lia";

import { useState } from 'react';
import axios from 'axios';

function StudentProfile(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            date: "06/13/2024",
            notes: "Something must have clicked because Andrew has become an absolute ANGEL. He is proficient in JavaScript, even more than some of us, and somehow even knows C++, Python, Java, Rust, and C Sharp, we have no idea where he learned it!",
        },
        {
            date: "06/05/2024",
            notes: "Today, Andrew did a great job with his work. He is still working on behavior issues but his proficiency in JavaScript is steadily improving.",
        },
        {
            date: "06/01/2024",
            notes: "Andrew was terrible today, screaming and tantrumming the whole session. He was so loud I wanted to go deaf. Will need to work on this next time.",
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
        <div id="StudentProfileContainer">
            <h1 id="StudentProfileTitle">Student Profile: {props.currStudent.name}</h1>
            <div id="StudentDataContainer">
                <div id="StudentNotesMainContainer">
                    <h2 id="StudentDataTitle">Notes</h2>
                    <div id="StudentNotesContainer">
                        <StudentInputNotes updateData={props.updateData} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent} token={props.token} />
                        <div id="StudentTextNotesContainer">
                            <div id="StudentNotesTableMainContainer">
                                <StudentNotesTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
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
                                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <div id="StudentInfoContainer">
                    <StudentTasks currStudent={props.currStudent} />
                    <StudentPoints updateData={props.updateData} currStudent={props.currStudent} setCurrStudent={props.setCurrStudent} token={props.token} />
                </div>
            </div>

        </div>
    )
}

export default StudentProfile;