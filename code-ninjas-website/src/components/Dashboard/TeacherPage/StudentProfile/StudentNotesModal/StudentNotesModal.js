import './StudentNotesModal.css';
import { useState } from 'react';

function StudentNotesModal({ closeModal, onSubmit, defaultValue }) {
    const [formState, setFormState] = useState(
        defaultValue || {
            date: "",
            notes: "",
        }
    );
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.date && formState.notes) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formState);
        closeModal();
    };


    return (
        <div
            className="StudentNotesModalContainer"
            onClick={(e) => {
                if (e.target.className === "StudentNotesModalContainer") closeModal();
            }}
        >
            <div className="StudentNotesModal">
                <form>
                    <div className="StudentNotesFormContainer">
                        <label htmlFor="date">Date</label>
                        <input name="date" onChange={handleChange} value={formState.date} />
                    </div>
                    <div className="StudentNotesFormContainer">
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            name="notes"
                            onChange={handleChange}
                            value={formState.notes}
                        />
                    </div>
                    {errors && <div className="StudentNotesErrorContainer">{`Please include: ${errors}`}</div>}
                    <div id="StudentNotesModalBtnsContainer">
                        <button type="submit" className="StudentNotesModalAddBtn StuentNotesModalBtn" onClick={handleSubmit}>
                            Confirm
                        </button>
                        <button type="cancel" className="StudentNotesModalCancelBtn StudentNotesModalBtn" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentNotesModal;