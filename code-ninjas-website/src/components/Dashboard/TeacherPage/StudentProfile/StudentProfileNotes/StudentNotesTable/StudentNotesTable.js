import './StudentNotesTable.css';
import { useState } from 'react';
import axios from 'axios';

function StudentNotesTable(props) {
    return (
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
                        <td className="StudentNotesInfo">blah blah blah</td>
                        <td className="StudentNotesAction"></td>
                    </tr>

                    <tr className="StudentNote">
                        <td className="StudentNotesDate">06/13/2024</td>
                        <td className="StudentNotesInfo">blah blah blah</td>
                        <td className="StudentNotesAction"></td>
                    </tr>

                    <tr className="StudentNote">
                        <td className="StudentNotesDate">06/13/2024</td>
                        <td className="StudentNotesInfo">blah blah blah</td>
                        <td className="StudentNotesAction"></td>
                    </tr>

                </tbody>
            </table>

            <button className="TeacherButton" id="AddNotesButton">Add Note</button>
        </div>
    );
}

export default StudentNotesTable;