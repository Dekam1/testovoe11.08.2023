import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

function RequireAuth({ children }) {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" state={{ from: location }} />
    }
    return children;
}

export default RequireAuth;