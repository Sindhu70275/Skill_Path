import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../features/auth";
import { ROUTES } from "../../shared/constants";

const PublicLayout = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
};

export default PublicLayout;
