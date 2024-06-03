import './Tasks.css'

function Tasks(props) {
    let body = props.userData.tasks;
    return (
        <div id="TasksContainer">
            <h1 id="TaskTitle">Tasks</h1>
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
            {row?.map((val, rowID) => (
                <th key={rowID}>{val}</th>
            ))}
        </tr>
    );
}

export default Tasks;