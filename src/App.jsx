import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AuthPage from "./features/auth/AuthPage";
import DiscoverPage from "./features/discover/DiscoverPage";
import DashboardPage from "./features/dashboard/DashboardPage";
import AnalyticsPage from "./features/analytics/AnalyticsPage";

const Layout = () => {
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
        <Route element={<Layout />}>
          <Route path="/auth" element={<AuthPage />} />
          <Route index element={<DiscoverPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
