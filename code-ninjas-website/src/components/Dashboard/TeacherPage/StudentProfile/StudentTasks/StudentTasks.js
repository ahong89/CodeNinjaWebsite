import './StudentTasks.css'

function StudentTasks(props) {
    return (
        <div id="StudentTasksContainer">
            <h2 id="StudentTaskListTitle">Tasks</h2>
            <table id="StudentTaskList">
                <thead>
                    <tr id="StudentTaskListHeader">
                        <th id="StudentTaskName">TASK NAME</th>
                        <th id="StudentTaskDueDate">DUE DATE</th>
                        <th id="StudentTaskCompletion">COMPLETION</th>
                    </tr>
                </thead>
                <tbody>
                    {props.currStudent.tasks?.map((rowContent, rowID) => (
                        <TableRow
                            rowContent={rowContent}
                            key={rowID}
                        />
                    ))}
                </tbody>
            </table>
            <button className="TeacherButton" id="TaskEditorButton">Edit Tasks</button>
        </div>
    )
}

function TableRow(props) {
    let row = props.rowContent;
    return (
        <tr className="StudentTask">
            {row?.map((val, rowID) => (
                <th key={rowID}>{val}</th>
            ))}
        </tr>
    );
}

export default StudentTasks
