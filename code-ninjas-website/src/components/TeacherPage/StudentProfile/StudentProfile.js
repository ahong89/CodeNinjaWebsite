import './StudentProfile.css';

function StudentProfile(props) {
    return (
        <div id="StudentProfileContainer">
            <h1 id="StudentProfileTitle">Student Profile</h1>
            <div id="StudentInfoContainer">
                <div id="StudentTasksContainer">
                    <h2 id="StudentTaskListTitle">Tasks</h2>
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
                                <th>Complete prompt</th>
                                <th>5/12/24</th>
                                <th>Incomplete</th>
                            </tr>

                            <tr className="StudentTask">
                                <th>Do bug projects</th>
                                <th>6/23/24</th>
                                <th>In progress</th>
                            </tr>

                            <tr className="StudentTask">
                                <th>Take the test</th>
                                <th>4/2/24</th>
                                <th>Complete</th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="TeacherButton" id="TaskEditorButton">Edit Tasks</button>
                </div>

                <div id="StudentPointsMainContainer">
                    <h2 id="StudentPointsTitle">Points</h2>
                    <div id="StudentPointsContainer">
                        <h3 id="StudentPoints">5000 NB</h3>
                    </div>
                    
                    <div id="StudentPointEditorContainer">
                        <input
                        // onChange={handleChange}
                        type="text" 
                        // text={loginForm.email}
                        name="StudentPointEditorInput" 
                        placeholder="Points"
                        // value={loginForm.email}
                        required/>
                        <button className="TeacherButton" id="StudentPointEditorButton">Edit NB</button>
                    </div>
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