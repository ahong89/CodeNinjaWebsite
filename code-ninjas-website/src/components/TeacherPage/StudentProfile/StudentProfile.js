import './StudentProfile.css';

function StudentProfile(props) {
    return (
        <div id="StudentProfileContainer">
            <h1 id="StudentProfileTitle">Student Profile</h1>
            <div id="StudentInfoContainer">
                <div id="StudentTasksContainer">
                    <h2 id="StudentTaskListTitle">Current Tasks</h2>
                    <table id="StudentTaskList">
                        <thead>
                            <tr id="StudentTaskListHeader">
                                <th>TASK NAME</th>
                                <th>DUE DATE</th>
                                <th>COMPLETION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {body?.map((rowContent, rowID) => (
                            <TableRow
                                rowContent={rowContent}
                                key={rowID}
                            />
                        ))} */}

                            <tr className="StudentTask">
                                {/* {row?.map((val, rowID) => (
                                    <th key={rowID}>{val}</th>
                                ))} */}
                                <th>Complete prompt</th>
                                <th>5/12/24</th>
                                <th>Incomplete</th>
                            </tr>
                        </tbody>
                    </table>

                    <button id="EditTaskListButton">Edit Tasks</button>
                </div>

                <div id="StudentPointsContainer">
                    <h2 id="StudentPoints">5000 NB</h2>
                    <button id="EditStudentPoints">Edit Tasks</button>
                </div>
            </div>
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

export default StudentProfile;