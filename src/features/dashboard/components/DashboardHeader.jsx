import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";

import { DASHBOARD_HEADER_MESSAGES } from "../../../shared/constants/messages";

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleFaqNavigation = () => {
    navigate("/");
  };

  const [randomMessage] = useState(() => {
    const randomIndex = Math.floor(
      Math.random() * DASHBOARD_HEADER_MESSAGES.length,
    );
    return DASHBOARD_HEADER_MESSAGES[randomIndex];
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to right, #efeff9, #efeff9, #fae9f4, #efeff9)",
        p: 1.5,
        borderRadius: 1,
        mt: 2,
        mb: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <StarIcon sx={{ color: "gold", fontSize: 26 }} />
        <Typography variant="body2" sx={{ fontWeight: 300 }}>
          {randomMessage}
        </Typography>
      </Box>

      {/* <Button
        onClick={handleFaqNavigation}
        variant="text"
        sx={{
          fontSize: "0.875rem",
          textTransform: "none",
          fontWeight: 500,
          color: "theme.palette.secondary.main",
        }}
      >
        View FAQs →
      </Button> */}
    </Box>
  );
};

export default DashboardHeader;
