import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";

import {LandingPage} from "../features/landing";
import {AuthPage} from "../features/auth";
import {DiscoverPage} from "../features/discover";
import {DashboardPage} from "../features/dashboard";
import {AnalyticsPage} from "../features/analytics";

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
