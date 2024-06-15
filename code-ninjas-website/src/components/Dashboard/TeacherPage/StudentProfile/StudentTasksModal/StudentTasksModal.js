import './StudentTasksModal.css';
import { useState } from 'react';

function StudentTasksModal({ closeModal, onSubmit, defaultValue }) {
    const [formState, setFormState] = useState(
        defaultValue || {
            name: "",
            date: "",
            completion: "Incomplete",
        }
    );
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.name && formState.date && formState.completion) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    let error = key.substring(0, 1).toUpperCase() + key.substring(1);
                    errorFields.push(error);
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
            className="StudentTaskModalContainer"
            onClick={(e) => {
                if (e.target.className === "StudentTaskModalContainer") closeModal();
            }}
        >
            <div className="StudentTaskModal">
                <form>
                    <div className="StudentTaskFormContainer">
                        <label htmlFor="name">Task Name</label>
                        <input name="name" onChange={handleChange} value={formState.name} />
                    </div>

                    <div className="StudentTaskFormContainer">
                        <label htmlFor="date">Date</label>
                        <input name="date" onChange={handleChange} value={formState.date} />
                    </div>
                    {/* <div className="StudentTaskFormContainer">
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            name="notes"
                            onChange={handleChange}
                            value={formState.notes}
                        />
                    </div> */}
                    {errors && <div className="StudentTaskErrorContainer">{`Please include: ${errors}`}</div>}
                    <div id="StudentNotesModalBtnsContainer">
                        <button type="submit" className="StudentTaskModalAddBtn StudentTaskModalBtn" onClick={handleSubmit}>
                            Confirm
                        </button>
                        <button type="cancel" className="StudentTaskModalCancelBtn StudentTaskModalBtn" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentTasksModal;