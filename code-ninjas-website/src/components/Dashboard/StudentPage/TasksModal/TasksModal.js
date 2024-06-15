import './TasksModal.css';
import { useState } from 'react';

function TasksModal({ closeModal, onSubmit, defaultValue, taskName }) {
    const [formState, setFormState] = useState(
        defaultValue || {
            link: "",
        }
    );
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.link) {
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
            className="TaskModalContainer"
            onClick={(e) => {
                if (e.target.className === "TaskModalContainer") closeModal();
            }}
        >
            <div className="TaskModal">
                <form>
                    <h1>{taskName}</h1>
                    <div className="TaskFormContainer">
                        <label htmlFor="link">Link</label>
                        <input name="link" onChange={handleChange} value={formState.link} />
                    </div>
                    {errors && <div className="TaskErrorContainer">{`Please include: ${errors}`}</div>}
                    <div id="TaskModalBtnsContainer">
                        <button type="submit" className="TaskModalAddBtn TaskModalBtn" onClick={handleSubmit}>
                            Confirm
                        </button>
                        <button type="cancel" className="TaskModalCancelBtn TaskModalBtn" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TasksModal;