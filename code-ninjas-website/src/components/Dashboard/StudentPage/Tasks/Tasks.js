import './Tasks.css'
import { BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";


function Tasks(props) {
    let body = props.userData.tasks;
    return (
        <div id="TasksContainer">
            <div id="TaskTitleContainer">
                <h1 id="TaskTitle">Tasks</h1>
                <BsListTask id="TaskListIcon"/>
            </div>
            
            <table id="TaskList">
                <thead>
                    <tr id="TaskListHeader">
                        <th>TASK NAME</th>
                        <th>DUE DATE</th>
                        <th>COMPLETION</th>
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