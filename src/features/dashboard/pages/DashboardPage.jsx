import Stack from "@mui/material/Stack";

import DashboardTab from "../components/DashboardTab";
import DashboardHeader from "../components/DashboardHeader";
import { ErrorDisplay } from "../../../shared/components";
import { useDashboardSkills } from "../../../shared/hooks/useGetDashboardSkills";

const DashboardPage = () => {
  const { data: dashboardSkills, isLoading, error } = useDashboardSkills();

  if (error) {
    return (
      <ErrorDisplay
        message={
          error?.response?.data?.message ||
          error?.message ||
          "Failed to load dashboard data. Please try again."
        }
      />
    );
  }

  return (
    <Stack sx={{ paddingX: { xs: "1rem", sm: "2rem", md: "4rem" } }}>
      <DashboardHeader />
      <DashboardTab dashboardSkills={dashboardSkills} isLoading={isLoading} />
    </Stack>
  );
};

export default DashboardPage;
