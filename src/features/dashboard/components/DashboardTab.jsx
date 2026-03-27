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
import NoSkillsFound from "../../../shared/components/NoSkillsFound";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
          ) : dashboardSkills?.enrolled?.length === 0 ? (
            <NoSkillsFound
              icon={AddCircleOutlineIcon}
              title="No enrolled skills yet"
              subtitle="Enroll in skills from the Discover page to get started."
            />
          ) : (
            <Grid container spacing={2}>
              {dashboardSkills.enrolled.map((skill) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} key={skill._id}>
                  <EnrolledSkillCard skillData={skill} />
                </Grid>
              ))}
            </Grid>
          )}
        </TabPanel>

        <TabPanel value="wishlist" sx={{ padding: "2rem 0rem" }}>
          {isLoading ? (
            <WishlistCardSkeleton count={4} />
          ) : dashboardSkills?.wishlisted?.length === 0 ? (
            <NoSkillsFound
              icon={FavoriteBorderIcon}
              title="No wishlisted skills yet"
              subtitle="Add skills to your wishlist from the Discover page."
            />
          ) : (
            <Grid container spacing={2}>
              {dashboardSkills.wishlisted.map((skill) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} key={skill._id}>
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
