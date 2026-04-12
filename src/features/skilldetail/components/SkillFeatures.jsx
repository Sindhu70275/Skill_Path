import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SchoolIcon from "@mui/icons-material/School";

import ModuleAccordion from "../../course/components/ModuleAccordion";

import { SKILL_DETAIL_LABELS } from "../../../shared/constants/messages";

const SkillFeatures = ({
  tags = [],
  learningOutcomes = [],
  prerequisites = [],
  modules = [],
  expandedModuleId,
  onModuleToggle,
}) => {
  return (
    <Box>
      {tags.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
            {SKILL_DETAIL_LABELS.TAGS}
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

      {learningOutcomes.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
            {SKILL_DETAIL_LABELS.WHAT_YOULL_LEARN}
          </Typography>
          <Grid container spacing={2}>
            {learningOutcomes.map((outcome, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <List dense disablePadding>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary={outcome} />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {prerequisites.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
            {SKILL_DETAIL_LABELS.PREREQUISITES}
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

      {modules.length > 0 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
            {SKILL_DETAIL_LABELS.COURSE_MODULES}
          </Typography>
          {modules.map((module) => (
            <ModuleAccordion
              key={module._id}
              module={module}
              expanded={expandedModuleId === module._id}
              onToggle={onModuleToggle}
              hideInteractive={true}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SkillFeatures;
