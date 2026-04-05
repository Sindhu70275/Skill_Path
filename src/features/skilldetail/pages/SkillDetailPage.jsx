import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useEnrollSkill } from "../../../shared/hooks/usePostEnrollSkill.js";
import { useSkillModules } from "../../course/hooks/useGetSkillModules.js";
import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";
import { useGetSkillDetails } from "../hooks/useGetSkillDetails";
import SkillHeader from "../components/SkillHeader";
import SkillFeatures from "../components/SkillFeatures";
import SkillSidebar from "../components/SkillSidebar";
import { ErrorDisplay } from "../../../shared/components";
import SkillDetailSkeleton from "../components/SkillDetailSkeleton";
import { SKILL_DETAIL_ERRORS } from "../../../shared/constants/messages";

const SkillDetailPage = () => {
  const { id } = useParams();
  const [expandedModuleId, setExpandedModuleId] = useState(null);

  const { data: skillData, isLoading, error, refetch } = useGetSkillDetails(id);

  const {
    mutate: enrollSkill,
    isPending: enrollPending,
    isSuccess: enrollSuccess,
  } = useEnrollSkill();

  const { data: modulesData, isLoading: modulesLoading } = useSkillModules(id);
  const modules = modulesData?.modules || [];

  const showSnackbar = useContext(SnackbarContext);

  const handleEnroll = () => {
    enrollSkill(skillData._id, {
      onSuccess: async (response) => {
        refetch();
        showSnackbar(response.message, "success");
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong";
        showSnackbar(message, "error");
      },
    });
  };

  const handleModuleToggle = (moduleId) => {
    const currentIndex = expandedModuleId;
    setExpandedModuleId(currentIndex === moduleId ? null : moduleId);
  };

  if (isLoading || modulesLoading) {
    return <SkillDetailSkeleton />;
  }

  if (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      SKILL_DETAIL_ERRORS.LOAD_FAILED;
    return <ErrorDisplay message={errorMessage} />;
  }

  if (!skillData) {
    return <ErrorDisplay message={SKILL_DETAIL_ERRORS.NOT_FOUND} />;
  }

  const {
    level,
    durationInSecs,
    tags = [],
    learningOutcomes = [],
    prerequisites = [],
    isEnrolled,
  } = skillData;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <SkillHeader skillData={skillData} />

          <SkillFeatures
            tags={tags}
            learningOutcomes={learningOutcomes}
            prerequisites={prerequisites}
            modules={modules}
            expandedModuleId={expandedModuleId}
            onModuleToggle={handleModuleToggle}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <SkillSidebar
            durationInSecs={durationInSecs}
            numModules={modules.length}
            level={level}
            label={
              enrollPending
                ? "Enrolling..."
                : isEnrolled || enrollSuccess
                  ? "Enrolled"
                  : "Enroll Now"
            }
            onEnroll={handleEnroll}
            disabled={enrollPending || isEnrolled || enrollSuccess}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillDetailPage;
