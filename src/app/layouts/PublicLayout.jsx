import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../features/auth";
import { ROUTES } from "../../shared/constants";

const PublicLayout = () => {
  const { token, user } = useContext(AuthContext);

  if (token && user) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
};

export default PublicLayout;
