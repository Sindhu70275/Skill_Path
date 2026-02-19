import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import DiscoverHeader from "../components/DiscoverHeader";
import DiscoverSkillCard from "../components/DiscoverSkillCard.jsx";
import { skillsData } from "../data/SkillsData";

const DiscoverPage = () => {
  return (
    <Stack sx={{ paddingX: { xs: "2rem", md: "4rem" } }}>
      <DiscoverHeader />
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{
          paddingY: "1rem",
        }}
      >
        {skillsData.map((skill) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={skill.id}>
            <DiscoverSkillCard
              title={skill.title}
              description={skill.description}
              src={skill.image}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default DiscoverPage;
