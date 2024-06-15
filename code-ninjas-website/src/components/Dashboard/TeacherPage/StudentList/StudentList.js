import './StudentList.css';
import { FaSearch } from "react-icons/fa";

import { useState } from 'react';

function StudentList(props) {
    const [ searchBar, setSearchBar ] = useState("")

    function handleSearch(contents){
        setSearchBar(contents)
        let filter = contents.toUpperCase();
        let newFilteredStudents = {}
        Object.keys(props.studentData).map((currStudent) => {
            if(currStudent.toUpperCase().indexOf(filter) > -1) {
                newFilteredStudents[currStudent] = props.studentData[currStudent];
            }
        })
        props.setFilteredStudents(newFilteredStudents)
        return props.filteredStudents
    }

    return (
        <div id="StudentListContainer">
            <div id="StudentListTitleContainer">
                <h1 id="StudentListTitle">Student List</h1>
                <div className="StudentSearchInput">
                    <input
                        onChange={(e) => handleSearch(e.target.value)}
                        type="text"
                        text={searchBar}
                        name="StudentSearch"
                        placeholder="Search"
                        value={searchBar}
                        required />
                    {/* <FaSearch className="Icon"/> */}
                </div>
            </div>

            <table id="StudentList">
                <tbody>
                    {Object.keys(props.filteredStudents).map((currStudent, studentID) => (
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