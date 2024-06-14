import './StudentList.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

function StudentList(props) {
    console.log(props.studentData)
    return (
        <div id="StudentListContainer">
            <div id="StudentListTitleContainer">
                <h1 id="StudentListTitle">Student List</h1>
                <div className="StudentSearchInput">
                    <input
                        // onChange={handleChange}
                        type="text"
                        // text={loginForm.email}
                        name="StudentSearch"
                        placeholder="Search"
                        // value={loginForm.email}
                        required />
                    {/* <FaSearch className="Icon"/> */}
                </div>
            </div>

            <table id="StudentList">
                <tbody>
                    {Object.keys(props.studentData).map((currStudent, studentID) => (
                        <Student
                            key={studentID}
                            setCurrStudent={props.setCurrStudent}
                            student={props.studentData[currStudent]}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function Student(props) {

    function handleStudentChange() {
        props.setCurrStudent(props.student)
        console.log(props.student)
    }

    return (
        <tr className="StudentRow">
            <td>
                <button className="Student" onClick={handleStudentChange}>{props.student.name}</button>
            </td>
        </tr>
    )
}

export default StudentList;