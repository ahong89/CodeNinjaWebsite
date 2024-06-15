import './Tasks.css'
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";


function Tasks(props) {
    let body = props.userData.tasks;
    return (
        <div id="TasksContainer">
            <div id="TaskTitleContainer">
                <h1 id="TaskTitle">Tasks</h1>
                <BsListTask id="TaskListIcon" />
            </div>

            <div id="TaskListContainer">
                <table id="TaskList">
                    <thead>
                        <tr id="TaskListHeader">
                            <th id="TaskName">TASK NAME</th>
                            <th id="TaskDate">DUE DATE</th>
                            <th id="TaskCompletion">COMPLETION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {body?.map((rowContent, rowID) => (
                            <TableRow
                                rowContent={rowContent}
                                key={rowID}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TableRow(props) {
    let row = props.rowContent;
    return (
        <tr className="Task">
            {Object.keys(row)?.map((key, rowID) => (
                <th key={rowID}>{row[key]}</th>
            ))}
        </tr>
    );
}

export default Tasks;