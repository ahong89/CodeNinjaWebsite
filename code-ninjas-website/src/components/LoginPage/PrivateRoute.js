import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute(props) {
    return (
        props.isAuthenticated ? 
        <>
            props.isTeacher ?
                {props.teacher}
                : {props.children}
        </>
        : <Navigate to="/login"/>
    );
}

export default PrivateRoute;