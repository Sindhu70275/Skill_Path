import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useUnenrollSkill } from "../../../shared/hooks/usePostUnenrollSkill.js";
import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useCourseContext } from "../context/CourseContext";

const CourseHeader = () => {
  const { skill, overallProgress } = useCourseContext();
  const showSnackbar = useContext(SnackbarContext);
  const { mutate: unenrollSkill } = useUnenrollSkill();

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUnenroll = () => {
    unenrollSkill(skill._id, {
      onSuccess: (response) => {
        showSnackbar(response.message, "success");
        navigate("/dashboard");
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong";
        showSnackbar(message, "error");
      },
    });
    handleClose();
  };

  const handleShare = async () => {
    try {
      const url = window.location.origin + window.location.pathname;
      await navigator.clipboard.writeText(url);
      showSnackbar("Copied course URL to clipboard!", "success");
    } catch (err) {
      showSnackbar("Failed to copy URL. Please copy manually.", "error");
    }
    handleClose();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 2,
        p: 2,
        mb: 3,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton onClick={handleBack} sx={{ padding: 0 }}>
          <ArrowBackIcon />
        </IconButton>

        <Box sx={{ width: 50 }}>
          <CircularProgressbar
            value={overallProgress}
            text={`${overallProgress}%`}
          />
        </Box>

        <Typography variant="h6">{skill?.title}</Typography>
      </Box>

      <Stack>
        <IconButton
          onClick={handleMenuOpen}
          sx={{ padding: 0, justifyContent: "flex-end" }}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleShare}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <ShareIcon fontSize="small" />
              <Typography>Share</Typography>
            </Stack>
          </MenuItem>
          <MenuItem onClick={handleUnenroll}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <CloseIcon fontSize="small" sx={{ color: "error.main" }} />
              <Typography sx={{ color: "error.main" }}>Unenroll</Typography>
            </Stack>
          </MenuItem>
        </Menu>
      </Stack>
    </Box>
  );
};

export default CourseHeader;
