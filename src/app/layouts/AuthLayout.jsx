import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../features/auth";
import { ResponsiveAppBar } from "../../shared/components";
import { ROUTES } from "../../shared/constants";

const AuthLayout = () => {
  const { token, user } = useContext(AuthContext);

  if (!token || !user) {
    return <Navigate to={ROUTES.LANDING} replace />;
  }

  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};

export default AuthLayout;
