import StudentSignup from './StudentSignup/StudentSignup.js'
import TeacherSignup from './TeacherSignup/TeacherSignup.js'
import AccountType from './AccountType/AccountType.js'

function Signup(props) {
  return (
    <>
      {props.signupAccType === null ?
        <AccountType setAccType={props.setSignupAccType} />
        : <>{
          props.signupAccType === "student" ?
            <StudentSignup setToken={props.setToken} setAuthentication={props.setIsAuthenticated} />
            : <>{
              props.signupAccType === "teacher" ?
                <TeacherSignup setToken={props.setToken} setAuthentication={props.setIsAuthenticated} />
                : <></>
            }</>
        }</>
      }
    </>
  );
}

export default Signup;
