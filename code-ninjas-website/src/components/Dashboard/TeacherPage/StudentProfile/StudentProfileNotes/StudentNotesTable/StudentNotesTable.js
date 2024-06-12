import './StudentNotesTable.css';
import { MdOutlineEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';

function StudentNotesTable(props) {
    return (
        <div id="StudentNotesTableMainContainer">
            <div id="StudentNotesTableContainer">
                <table id="StudentNotesTable">
                    <thead>
                        <tr id="StudentNotesTableHeader">
                            <th className="StudentNotesDate">DATE</th>
                            <th className="StudentNotesInfo">NOTES</th>
                            <th className="StudentNotesAction">ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* {rows.map((row, idx) => {
                        return (
                            <tr key={idx}>
                                <td className="StudentNotesDate">{row.page}</td>
                                <td className="StudentNotesInfo">{row.description}</td>
                                <td className="fit">
                                    <span className="actions">
                                        <BsFillTrashFill
                                            className="delete-btn"
                                            onClick={() => deleteRow(idx)}
                                        />
                                        <BsFillPencilFill
                                            className="edit-btn"
                                            onClick={() => editRow(idx)}
                                        />
                                    </span>
                                </td>
                            </tr>
                        );
                    })} */}

                        <tr className="StudentNote">
                            <td className="StudentNotesDate">06/13/2024</td>
                            <td className="StudentNotesInfo NotesRow">Something must have clicked because Andrew has become an absolute ANGEL. He is proficient in JavaScript, even more than some of us, and somehow even knows C++, Python, Java, Rust, and C Sharp, we have no idea where he learned it!</td>
                            <td className="StudentNotesAction StudentNoteIcons">
                                <MdOutlineEdit className="StudentNoteIcon StudentNoteEditButton" />
                                <IoMdTrash className="StudentNoteIcon StudentNoteDeleteButton" />
                            </td>
                        </tr>

                        <tr className="StudentNote">
                            <td className="StudentNotesDate">06/05/2024</td>
                            <td className="StudentNotesInfo NotesRow">Today, Andrew did a great job with his work. He is still working on behavior issues but his proficiency in JavaScript is steadily improving.</td>
                            <td className="StudentNotesAction StudentNoteIcons">
                                <MdOutlineEdit className="StudentNoteIcon StudentNoteEditButton" />
                                <IoMdTrash className="StudentNoteIcon StudentNoteDeleteButton" />
                            </td>
                        </tr>

                        <tr className="StudentNote">
                            <td className="StudentNotesDate">06/01/2024</td>
                            <td className="StudentNotesInfo NotesRow">Andrew was terrible today, screaming and tantrumming the whole session. He was so loud I wanted to go deaf. Will need to work on this next time.</td>
                            <td className="StudentNotesAction StudentNoteIcons">
                                <MdOutlineEdit className="StudentNoteIcon StudentNoteEditButton" />
                                <IoMdTrash className="StudentNoteIcon StudentNoteDeleteButton" />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


            <button className="TeacherButton" id="AddNotesButton">Add Note</button>
        </div>
    );
}

export default StudentNotesTable;