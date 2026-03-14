import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import CourseHeader from "../components/CourseHeader";
import ModuleSidebar from "../components/ModuleSidebar";
import CourseInfo from "../components/CourseInfo";
import VideoPlayer from "../components/VideoPlayer";
import CoursePageSkeleton from "../components/CoursePageSkeleton";
import { ErrorDisplay } from "../../../shared/components";

import { useSkillModules } from "../hooks/useGetSkillModules.js";
import { useModuleLessons } from "../hooks/useGetModuleLessons.js";

const CoursePage = () => {
  const { skillId } = useParams();
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  const { data, isLoading, error } = useSkillModules(skillId);

  const { data: lessons = [] } = useModuleLessons(
    selectedModuleId,
    !!selectedModuleId,
  );

  useEffect(() => {
    if (data?.lastActiveLesson && !selectedLessonId) {
      setSelectedLessonId(data.lastActiveLesson.lessonId);
      setSelectedModuleId(data.lastActiveLesson.moduleId);
    } else if (data?.modules?.length > 0 && !selectedModuleId) {
      setSelectedModuleId(data.modules[0]._id);
    }
  }, [data, selectedLessonId, selectedModuleId]);

  useEffect(() => {
    if (lessons.length > 0 && !selectedLessonId) {
      const firstIncomplete = lessons.find((l) => !l.isCompleted);
      setSelectedLessonId((firstIncomplete || lessons[0])._id);
    }
  }, [lessons, selectedLessonId]);

  if (isLoading) return <CoursePageSkeleton />;
  if (error)
    return (
      <ErrorDisplay message="Failed to load course data. Please refresh or try again." />
    );

  const { modules, skill } = data;

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        paddingX: { xs: "2rem", md: "4rem" },
        py: 3,
      }}
    >
      <CourseHeader title={skill?.title} />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box
            sx={{
              backgroundColor: "#000",
              borderRadius: 2,
              overflow: "hidden",
              mb: 3,
            }}
          >
            <VideoPlayer lessonId={selectedLessonId} />
          </Box>

          <CourseInfo course={skill} />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Box
            sx={{
              position: { lg: "sticky" },
              top: { lg: 24 },
              backgroundColor: "#ffffff",
              borderRadius: 2,
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              maxHeight: { lg: "calc(100vh - 100px)" },
              overflowY: "auto",
            }}
          >
            <ModuleSidebar
              modules={modules}
              onSelectLesson={setSelectedLessonId}
              autoOpenModuleId={selectedModuleId}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoursePage;
