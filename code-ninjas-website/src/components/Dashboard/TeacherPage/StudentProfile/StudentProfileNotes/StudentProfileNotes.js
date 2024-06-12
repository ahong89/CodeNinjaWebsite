import './StudentProfileNotes.css';
import StudentNotesTable from './StudentNotesTable/StudentNotesTable.js';
import { useState } from 'react';
import axios from 'axios';

function StudentProfileNotes(props) {
    return (
        <div id="StudentProfileNotesContainer">
            <StudentNotesTable />
        </div>
    );
}

export default StudentProfileNotes;