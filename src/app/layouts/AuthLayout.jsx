import { Suspense, useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AuthContext } from "../../features/auth";
import { ResponsiveAppBar } from "../../shared/components";
import { SplashScreen } from "../../shared/components";
import { ROUTES } from "../../shared/constants";

const AuthLayout = () => {
  const { token, user } = useContext(AuthContext);

  if (!token || !user) {
    return <Navigate to={ROUTES.LANDING} replace />;
  }

  return (
    <Suspense fallback={<SplashScreen />}>
      <ResponsiveAppBar />
      <Outlet />
    </Suspense>
  );
};

export default AuthLayout;
