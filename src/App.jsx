import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import LandingPage from "./features/landing/LandingPage";
import AuthPage from "./features/auth/AuthPage";
import DiscoverPage from "./features/discover/DiscoverPage";
import DashboardPage from "./features/dashboard/DashboardPage";
import AnalyticsPage from "./features/analytics/AnalyticsPage";

const PublicLayout = () => {
  return <Outlet />;
};

const AuthLayout = () => {
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
