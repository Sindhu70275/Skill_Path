import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";

import { formatDuration } from "../../../shared/utils/formatDuration.js";
import { CustomButton } from "../../../shared/components";

const SkillSidebar = ({
  durationInSecs,
  numModules,
  level,
  label,
  onEnroll,
  disabled,
}) => {
  return (
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
            <Typography variant="h6">{formatDuration(durationInSecs)}</Typography>
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <MenuBookIcon sx={{ color: "primary.main" }} />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Modules
            </Typography>
            <Typography variant="h6">{numModules} modules</Typography>
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
            label={label}
            onClick={onEnroll}
            variant="contained"
            width="100%"
            disabled={disabled}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default SkillSidebar;
