 import './StudentList.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';

function StudentList(props) {

    let students = props.studentData

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
                    required/>
                    {/* <FaSearch className="Icon"/> */}
                </div>
            </div>
            
            <table id="StudentList">
                {/* <tr className="StudentRow"><Student name="Andrew Hong"/></tr>
                <tr className="StudentRow"><Student name="Nathan Zhang"/></tr>
                <tr className="StudentRow"><Student name="Harsh Akunuri"/></tr> */}
                {students.map((currStudent, studentID) => (
                    <tr className="StudentRow"><Student
                        setCurrStudent={props.setCurrStudent}
                        student={currStudent}
                    /></tr>
                ))}
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
        <button className="Student" onClick={handleStudentChange}>{props.student.name}</button>
    )
}

export default StudentList;