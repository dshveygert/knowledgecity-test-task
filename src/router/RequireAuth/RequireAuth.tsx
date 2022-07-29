import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../auth/AuthProvider/AuthProvider";
import {isAuthenticated} from "../auth/authorisation";

export default function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useAuth();
    const location = useLocation();
    if (!auth.user && !isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}
