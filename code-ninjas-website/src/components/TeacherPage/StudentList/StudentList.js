import './StudentList.css';

function StudentList(props) {
    return (
        <div id="StudentListContainer">
            <h1 id="StudentListTitle">Student List</h1>
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