import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";

import VisibilityIcon from "@mui/icons-material/Visibility";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { CustomButton } from "../../../shared/components";

const EnrolledSkillCard = ({ skillData }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/skillDetails/${id}`);
  };

  const handleStartLearning = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 280,
        boxShadow: 2,
        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={skillData.image}
          alt={skillData.title}
          sx={{
            width: "100%",
            height: 160,
            objectFit: "cover",
          }}
        />

        <IconButton
          onClick={() => handleViewDetails(skillData._id)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "primary.main",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </Box>

      <Box
        sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 1.5 }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {skillData.title}
        </Typography>

        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={skillData.progress || 0}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: "#e0e0e0",
              "& .MuiLinearProgress-bar": {
                borderRadius: 4,
              },
            }}
          />
          <Typography variant="caption" color="text.secondary">
            {skillData.progress || 0}% Complete
          </Typography>
        </Box>

        <CustomButton
          label="Start Learning"
          onClick={() => handleStartLearning(skillData._id)}
          variant="contained"
          startIcon={<PlayCircleOutlineIcon />}
        />
      </Box>
    </Card>
  );
};

export default EnrolledSkillCard;
