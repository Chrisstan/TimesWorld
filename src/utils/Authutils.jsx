import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const isVerified = localStorage.getItem("isVerified");
    if (!isVerified) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
};

export { RequireAuth };