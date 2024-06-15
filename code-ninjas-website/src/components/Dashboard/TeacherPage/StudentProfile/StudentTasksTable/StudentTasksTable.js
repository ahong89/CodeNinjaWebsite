import './StudentTasksTable.css'
import { MdOutlineEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

function StudentTasksTable({ rows, deleteRow, editRow }) {
    return (
        <div id="StudentTasksContainer">
            <h2 id="StudentTaskListTitle">Tasks</h2>
            <div id="StudentTasksTableContainer">
                <table id="StudentTaskList">
                    <thead>
                        <tr id="StudentTaskListHeader">
                            <th id="StudentTaskName">TASK NAME</th>
                            <th id="StudentTaskDueDate">DUE DATE</th>
                            <th id="StudentTaskCompletion">COMPLETION</th>
                            <th id="StudentTaskAction">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {props.currStudent.tasks?.map((rowContent, rowID) => (
                        <TableRow
                            rowContent={rowContent}
                            key={rowID}
                        />
                    ))} */}

                        {rows?.map((row, idx) => {
                            return (
                                <tr key={idx} className="StudentTask">
                                    <td id="StudentTaskName">{row.name}</td>
                                    <td id="StudentTaskDueDate">{row.date}</td>
                                    <td id="StudentTaskCompletion">{row.completion}</td>
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
        </div>
    )
}

// function TableRow(props) {
//     let row = props.rowContent;
//     return (
//         <tr className="StudentTask">
//             {row?.map((val, rowID) => (
//                 <th key={rowID}>{val}</th>
//             ))}
//         </tr>
//     );
// }

export default StudentTasksTable;
