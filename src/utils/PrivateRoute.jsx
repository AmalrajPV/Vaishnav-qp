import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./loginContaxt";

const PrivateRoute = ({ userType }) => {
  const auth = useAuth();

  if (!auth.user || auth.usertype !== userType) {
    
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
