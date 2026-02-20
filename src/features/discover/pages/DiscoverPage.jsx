import { useState, useEffect } from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import DiscoverHeader from "../components/DiscoverHeader";
import DiscoverSkillCard from "../components/DiscoverSkillCard";
import NoSkillsFound from "../components/NoSkillsFound";
import { skillsData } from "../data/SkillsData";

const DiscoverPage = () => {
  const [searchSkill, setSearchSkill] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchSkill);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchSkill]);

  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch = skill.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchesFilter =
      skillFilter.length === 0 ||
      skillFilter.every((tag) => skill.tags.includes(tag));
    return matchesSearch && matchesFilter;
  });

  return (
    <Stack sx={{ paddingX: { xs: "2rem", md: "4rem" } }}>
      <DiscoverHeader
        searchSkill={searchSkill}
        setSearchSkill={setSearchSkill}
        skillFilter={skillFilter}
        setSkillFilter={setSkillFilter}
        setDebouncedSearch={setDebouncedSearch}
      />
      {filteredSkills.length === 0 ? (
        <NoSkillsFound />
      ) : (
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{
            paddingY: "1rem",
          }}
        >
          {filteredSkills.map((skill) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={skill.id}>
              <DiscoverSkillCard
                title={skill.title}
                description={skill.description}
                src={skill.image}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default DiscoverPage;
