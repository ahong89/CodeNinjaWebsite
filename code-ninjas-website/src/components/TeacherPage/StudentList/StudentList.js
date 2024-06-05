 import './StudentList.css';
import { FaSearch } from "react-icons/fa";

function StudentList(props) {
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
                <tr className="StudentRow"><Student name="Andrew Hong"/></tr>
                <tr className="StudentRow"><Student name="Nathan Zhang"/></tr>
                <tr className="StudentRow"><Student name="Harsh Akunuri"/></tr>
            </table>
        </div>
    )
}

function Student(props) {
    return (
        <button className="Student">{props.name}</button>
    )
}

export default StudentList;