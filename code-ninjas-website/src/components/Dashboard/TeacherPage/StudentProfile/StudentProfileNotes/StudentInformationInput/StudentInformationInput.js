import './StudentInformationInput.css';
import { useState } from 'react';

function StudentInformationInput(props) {
    return (
        <div className="StudentNotesInput">
            <h3 className="StudentNotesInputTitle">{props.title}</h3>
            <input className="StudentNotesInputBox"
                onChange={e => props.setData(props.attribute, e.target.value)}
                type="text" 
                text={props.data}
                value={props.data}
                readOnly={props.readOnly}
            required/>
        </div>
    )
}

export default StudentInformationInput;