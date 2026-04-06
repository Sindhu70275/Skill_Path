import { useState, useEffect, useContext } from "react";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { useSkills } from "../hooks/useGetSkills";
import { AuthContext } from "../../../features/auth/context/AuthContext";

import DiscoverHeader from "../components/DiscoverHeader";
import DiscoverSkillCard from "../components/DiscoverSkillCard";
import NoSkillsFound from "../../../shared/components/NoSkillsFound";
import { SkillsLoadingSkeleton } from "../components/SkillCardSkeleton";
import { ErrorDisplay } from "../../../shared/components";
import {
  DISCOVER_ERRORS,
  DISCOVER_LABELS,
} from "../../../shared/constants/messages";

const DiscoverPage = () => {
  const [searchSkill, setSearchSkill] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState([]);

  const auth = useContext(AuthContext);
  const {
    data: skillsData,
    isLoading,
    error,
  } = useSkills(debouncedSearch, skillFilter, auth?.user?.id);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchSkill);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchSkill]);

  const renderContent = () => {
    if (isLoading) {
      return <SkillsLoadingSkeleton count={4} />;
    }

    if (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        DISCOVER_ERRORS.LOAD_SKILLS;
      return <ErrorDisplay message={errorMessage} />;
    }

    if (!skillsData || skillsData.length === 0) {
      return (
        <NoSkillsFound
          title={DISCOVER_LABELS.NO_MATCHES_TITLE}
          subtitle={DISCOVER_LABELS.NO_MATCHES_SUBTITLE}
        />
      );
    }

    return (
      <Grid container spacing={2} columns={12} sx={{ paddingY: "1rem" }}>
        {skillsData.map((skill) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} key={skill._id}>
            <DiscoverSkillCard skillData={skill} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Stack sx={{ paddingX: { xs: "1rem", sm: "2rem", md: "4rem" } }}>
      <DiscoverHeader
        searchSkill={searchSkill}
        setSearchSkill={setSearchSkill}
        skillFilter={skillFilter}
        setSkillFilter={setSkillFilter}
        setDebouncedSearch={setDebouncedSearch}
        skillsData={skillsData || []}
      />
      {renderContent()}
    </Stack>
  );
};

export default DiscoverPage;
