import Stack from "@mui/material/Stack";    

import ModuleAccordion from "./ModuleAccordion";

const ModuleSidebar = ({ modules, onSelectLesson }) => {
  return (
    <Stack>
      {modules.map((module) => (
        <ModuleAccordion
          key={module._id}
          module={module}
          onSelectLesson={onSelectLesson}
        />
      ))}
    </Stack>
  );
};

export default ModuleSidebar;
