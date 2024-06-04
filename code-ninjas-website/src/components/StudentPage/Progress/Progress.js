import './Progress.css'
import { GiProgression } from "react-icons/gi";

function Progress(props) {
    return (
        <div id="ProgressContainer">
            <div id="ProgressTitleContainer">
                <h1 id="ProgressTitle">Progress</h1>
                <GiProgression id="ProgressIcon" />
            </div>
        </div>
    )
}

export default Progress;