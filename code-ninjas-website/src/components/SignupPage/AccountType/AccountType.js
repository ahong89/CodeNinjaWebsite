import './AccountType.css';
import AccountTypeDisplay from './AccountTypeDisplay/AccountTypeDisplay.js'
import axios from 'axios';

function StudentPage(props) {

  return (
    <div className="AccountType">
        <div id="MainAccountTypeContainer">
            <AccountTypeDisplay setAccType={props.setAccType} className="Tab"/>
        </div>
    </div>
  );
}

export default StudentPage;
