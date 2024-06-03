import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute(props) {
    return (
        props.isAuthenticated ? <>{props.children}</> : <Navigate to="/login"/>
    );
}

export default PrivateRoute;