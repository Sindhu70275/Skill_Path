import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useModuleLessons } from "../hooks/useGetModuleLessons.js";
import { formatDuration } from "../../../shared/utils/formatDuration.js";
import LessonsSkeleton from "./LessonsSkeleton";
import LessonItem from "./LessonItem";

const ModuleAccordion = ({ module, expanded, onToggle, hideInteractive }) => {
  const { data: lessons = [], isLoading } = useModuleLessons(
    module._id,
    expanded,
  );
  return (
    <Accordion expanded={expanded} onChange={() => onToggle(module._id)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ width: "100%", px: 2 }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {module.order}. {module.title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap",
                mt: 0.5,
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">
                {formatDuration(module.durationInSecs)}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </AccordionSummary>
      <Divider sx={{ my: 0.5 }} />

      <AccordionDetails sx={{ px: 2, py: 0 }}>
        {isLoading && <LessonsSkeleton count={2} />}

        {lessons.map((lesson) => (
          <LessonItem key={lesson._id} lesson={lesson} hideInteractive={hideInteractive} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default ModuleAccordion;
