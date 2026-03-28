import { createContext, useContext, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useSkillModules } from "../hooks/useGetSkillModules.js";
import { useModuleLessons } from "../hooks/useGetModuleLessons.js";
import { useLessonById } from "../hooks/useGetLessonById.js";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const { skillId } = useParams();
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  const { data, isLoading, error } = useSkillModules(skillId);

  const { data: lessons = [] } = useModuleLessons(
    selectedModuleId,
    !!selectedModuleId,
  );

  const { data: currentLesson } = useLessonById(selectedLessonId);

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

  const { modules, skill } = data || {};
  const currentModule = modules?.find((m) => m._id === selectedModuleId);
  const currentSubsection = lessons.find((l) => l._id === selectedLessonId);
  const videoProgress = currentLesson?.progressPercentage
    ? Math.round(currentLesson.progressPercentage * 100)
    : 0;

  const overallProgress = data?.overallPercentage ?? 0;

  const value = {
    selectedModuleId,
    setSelectedModuleId,
    selectedLessonId,
    setSelectedLessonId,
    modules,
    lessons,
    currentModule,
    currentSubsection,
    currentLesson,
    videoProgress,
    overallProgress,
    isLoading,
    error,
    skill,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within CourseProvider");
  }
  return context;
};
