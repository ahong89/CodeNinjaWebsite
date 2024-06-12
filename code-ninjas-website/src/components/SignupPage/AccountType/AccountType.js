import './AccountType.css';
import AccountTypeDisplay from './AccountTypeDisplay/AccountTypeDisplay.js'
import axios from 'axios';

function AccountType(props) {

  return (
    <div className="AccountType fade-in">
        <div id="MainAccountTypeContainer">
            <AccountTypeDisplay setAccType={props.setAccType} className="Tab"/>
        </div>
    </div>
  );
}

export default AccountType;
