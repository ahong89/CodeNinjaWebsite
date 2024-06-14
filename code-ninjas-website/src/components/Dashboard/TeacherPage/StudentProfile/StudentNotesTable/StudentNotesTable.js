import './StudentNotesTable.css';
import { MdOutlineEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';

function StudentNotesTable({ rows, deleteRow, editRow }) {
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
                    {rows?.map((row, idx) => {
                        return (
                            <tr key={idx} className="StudentNote">
                                <td className="StudentNotesDate">{row.date}</td>
                                <td className="StudentNotesInfo NotesRow">{row.notes}</td>
                                <td className="StudentNotesAction StudentNoteIcons">
                                    <MdOutlineEdit
                                        className="StudentNoteIcon StudentNoteEditButton"
                                        onClick={() => editRow(idx)}
                                    />
                                    <IoMdTrash
                                        className="StudentNoteIcon StudentNoteDeleteButton"
                                        onClick={() => deleteRow(idx)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default StudentNotesTable;