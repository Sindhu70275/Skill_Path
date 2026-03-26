import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SchoolIcon from "@mui/icons-material/School";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import { useEnrollSkill } from "../../../shared/hooks/usePostEnrollSkill.js";
import { useSkillModules } from "../../course/hooks/useGetSkillModules.js";
import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";
import { useGetSkillDetails } from "../hooks/useGetSkillDetails";
import SkillDetailSkeleton from "../components/SkillDetailSkeleton";
import ModuleAccordion from "../../course/components/ModuleAccordion";
import { ErrorDisplay, CustomButton } from "../../../shared/components";

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
      "Failed to load skill details. Please try again.";
    return <ErrorDisplay message={errorMessage} />;
  }

  if (!skillData) {
    return <ErrorDisplay message="Skill not found" />;
  }

  const {
    title,
    description,
    image,
    category,
    level,
    durationInHours,
    tags = [],
    learningOutcomes = [],
    prerequisites = [],
    isEnrolled,
  } = skillData;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          {image && (
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: { md: 350 },
                objectFit: "cover",
                borderRadius: 2,
                mb: 3,
              }}
            />
          )}

          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: 700, color: "secondary.main" }}
          >
            {title}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Chip
              label={category}
              sx={{
                backgroundColor: "primary.main",
                color: "#ffffff",
                fontWeight: 500,
              }}
            />
            <Chip
              label={level}
              variant="outlined"
              sx={{
                borderColor: "secondary.main",
                color: "secondary.main",
                fontWeight: 500,
              }}
            />
          </Stack>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: "text.secondary", lineHeight: 1.8 }}
          >
            {description}
          </Typography>

          {tags && tags.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Tags
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          )}

          {learningOutcomes && learningOutcomes.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                What you'll learn
              </Typography>
              <Grid container spacing={2}>
                {learningOutcomes.map((outcome, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <List dense disablePadding>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleOutlineIcon
                            sx={{ color: "primary.main" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={outcome} />
                      </ListItem>
                    </List>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {prerequisites && prerequisites.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Prerequisites
              </Typography>
              <List>
                {prerequisites.map((prereq, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <SchoolIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary={prereq} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {modules && modules.length > 0 && (
            <Box>
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Course Modules
              </Typography>
              {modules.map((module) => (
                <ModuleAccordion
                  key={module._id}
                  module={module}
                  expanded={expandedModuleId === module._id}
                  onToggle={handleModuleToggle}
                  hideInteractive={true}
                />
              ))}
            </Box>
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              position: { md: "sticky" },
              top: { md: 24 },
              p: 3,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              backgroundColor: "#ffffff",
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <AccessTimeIcon sx={{ color: "primary.main" }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Duration
                  </Typography>
                  <Typography variant="h6">{durationInHours} hours</Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <MenuBookIcon sx={{ color: "primary.main" }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Modules
                  </Typography>
                  <Typography variant="h6">{modules.length} modules</Typography>
                </Box>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <SchoolIcon sx={{ color: "primary.main" }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Level
                  </Typography>
                  <Typography variant="h6">{level}</Typography>
                </Box>
              </Stack>

              <Box sx={{ pt: 2 }}>
                <CustomButton
                  label={
                    enrollPending
                      ? "Enrolling..."
                      : isEnrolled || enrollSuccess
                        ? "Enrolled"
                        : "Enroll Now"
                  }
                  onClick={handleEnroll}
                  variant="contained"
                  width="100%"
                  disabled={enrollPending || isEnrolled || enrollSuccess}
                />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillDetailPage;
