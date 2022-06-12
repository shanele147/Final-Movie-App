import React from 'react';
import { Navigate } from "react-router-dom";

/* function PrivateRoute(props) {
    const { component: Component, ...rest } = props;
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return <Component {...rest} />;
}

export default PrivateRoute; */

const PrivateRoute = (props) => {
    const { component: Component, ...rest } = props;
    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return <Component {...rest} />;
};

export default PrivateRoute;
