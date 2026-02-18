import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./features/auth/context/AuthContext.jsx";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import LandingPage from "./features/landing/LandingPage";
import AuthPage from "./features/auth/pages/AuthPage";
import DiscoverPage from "./features/discover/pages/DiscoverPage.jsx";
import DashboardPage from "./features/dashboard/DashboardPage";
import AnalyticsPage from "./features/analytics/AnalyticsPage";
import { ROUTES } from "./constants/routes";

const PublicLayout = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
  return <Outlet />;
};

const AuthLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to={ROUTES.LANDING} replace />;
  }
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
