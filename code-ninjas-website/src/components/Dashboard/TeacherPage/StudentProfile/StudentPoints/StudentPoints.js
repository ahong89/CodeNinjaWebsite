import { useState } from 'react';
import axios from 'axios';

function StudentPoints(props) {
    const [ incrementNB, setIncrementNB ] = useState(0)

    function handleNBIncrement(event) {
        let newnb = Number(incrementNB) + Number(props.currStudent.nb)
        axios({
            method: "POST",
            url: process.env.REACT_APP_BACKEND_IP + "/setnb",
            headers: {
                Authorization: 'Bearer ' + props.token
            },
            data: {
                email: props.currStudent.email,
                nb: newnb
            }
        })
        .then((response) => {
            props.setCurrStudent(prevState => ({
                ...prevState,
                nb: newnb
            }))
            props.updateData("nb", newnb)
            return response.data
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    return (
        <div id="StudentPointsMainContainer">
            <h2 id="StudentPointsTitle">Points</h2>
            <div id="StudentPointsContainer">
                <h3 id="StudentPoints">{props.currStudent.nb} NB</h3>
            </div>

            <div id="StudentPointEditorContainer">
                <input
                    onChange={(e) => setIncrementNB(e.target.value)}
                    type="text"
                    text={incrementNB}
                    name="StudentPointEditorInput"
                    placeholder="Points"
                    value={incrementNB}
                    required />
                <button className="TeacherButton" id="StudentPointEditorButton" onClick={handleNBIncrement}>Update NB</button>
            </div>
        </div>
    )
}

export default StudentPoints