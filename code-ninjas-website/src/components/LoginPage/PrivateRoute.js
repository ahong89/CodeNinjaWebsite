import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute(props) {
    console.log(props.isTeacher)
    return (
        props.isAuthenticated ? 
        <>
            {props.isTeacher ?
                <div>{props.teacher}</div>
                : <div>{props.student}</div>
            }
        </>
        : <Navigate to="/login"/>
    );
}

export default PrivateRoute;