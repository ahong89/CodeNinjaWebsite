import './Tasks.css'

function Tasks(props) {
    return (
        <div id="TasksContainer">
            <h1 id="TaskTitle">Tasks</h1>
            <table id="TaskList">
                <tr id="TaskListHeader">
                    <th>TASK NAME</th>
                    <th>DUE DATE</th>
                    <th>COMPLETION</th>
                </tr>
                <tr className="Task">
                    <th>Complete the weekly prompt</th>
                    <th>5/30/24</th>
                    <th>Completed</th>
                </tr>
                <tr className="Task">
                    <th>Start working on project</th>
                    <th>6/1/24</th>
                    <th>Not started</th>
                </tr>
                <tr className="Task">
                    <th>Finish last week's work</th>
                    <th>6/23/24</th>
                    <th>In progress</th>
                </tr>
            </table>
        </div>
    )
}

export default Tasks;