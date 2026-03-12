import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";

import { LandingPage } from "../features/landing";
import { LoginPage, RegisterPage } from "../features/auth";
import { DiscoverPage } from "../features/discover";
import { SkillDetailPage } from "../features/skilldetail";
import { DashboardPage } from "../features/dashboard";
import { CoursesPage } from "../features/course";
import { AnalyticsPage } from "../features/analytics";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/skillDetails/:id" element={<SkillDetailPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/course/:skillId" element={<CoursesPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
