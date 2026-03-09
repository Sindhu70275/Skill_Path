import { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";

import EnrolledSkillCard from "./EnrolledSkillCard";
import WishlistCard from "./WishlistCard";
import EnrolledSkillCardSkeleton from "./EnrolledSkillCardSkeleton";
import WishlistCardSkeleton from "./WishlistCardSkeleton";

const DashboardTab = ({ dashboardSkills, isLoading }) => {
  const [tab, setTab] = useState("enroll");

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Enrolled" value="enroll" />
            <Tab label="Wishlist" value="wishlist" />
          </TabList>
        </Box>

        <TabPanel value="enroll" sx={{ padding: "2rem 0rem" }}>
          {isLoading ? (
            <EnrolledSkillCardSkeleton count={4} />
          ) : (
            <Grid container spacing={2}>
              {dashboardSkills?.enrolled?.map((skill) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={skill._id}>
                  <EnrolledSkillCard skillData={skill} />
                </Grid>
              ))}
            </Grid>
          )}
        </TabPanel>

        <TabPanel value="wishlist" sx={{ padding: "2rem 0rem" }}>
          {isLoading ? (
            <WishlistCardSkeleton count={4} />
          ) : (
            <Grid container spacing={2}>
              {dashboardSkills?.wishlisted?.map((skill) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={skill._id}>
                  <WishlistCard skillData={skill} />
                </Grid>
              ))}
            </Grid>
          )}
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default DashboardTab;
