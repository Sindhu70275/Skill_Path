import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import ModuleAccordion from "./ModuleAccordion";
import { useCourseContext } from "../context/CourseContext";

const ModuleSidebar = () => {
  const { modules, selectedModuleId: autoOpenModuleId } = useCourseContext();
  const [openModuleId, setOpenModuleId] = useState(null);

  useEffect(() => {
    setOpenModuleId(autoOpenModuleId);
  }, [autoOpenModuleId]);

  const handleToggle = (moduleId) => {
    setOpenModuleId((prev) => (prev === moduleId ? null : moduleId));
  };

  return (
    <Stack>
      {modules.map((module) => (
        <ModuleAccordion
          key={module._id}
          module={module}
          expanded={openModuleId === module._id}
          onToggle={handleToggle}
        />
      ))}
    </Stack>
  );
};

export default ModuleSidebar;
