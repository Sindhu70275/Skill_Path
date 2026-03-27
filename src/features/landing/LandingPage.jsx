import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SkillIcon from "../../assets/skill-path.png";
import landingbg from "../../assets/landing-bg.jpg";
import { CustomButton } from "../../shared/components";
import {
  ROUTES,
  LANDING_SUBTITLES,
  LANDING_BUTTON_LABELS,
  APP_TITLE,
} from "../../shared/constants";

const LandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "0.5rem 0.6rem", md: "1rem 0.6rem 1rem 0.4rem" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={SkillIcon}
            alt="Skill Path Logo"
            sx={{ height: { xs: 30, md: 40 }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              color: theme.palette.primary.main,
              fontStyle: "italic",
              cursor: "pointer",
              marginTop: "0.2rem",
            }}
          >
            {APP_TITLE}
          </Typography>
        </Box>
        <Box>
          <CustomButton
            label={LANDING_BUTTON_LABELS.LOGIN}
            onClick={handleLogin}
            width={{ xs: "80%", md: "auto" }}
          />
        </Box>
      </AppBar>

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          backgroundColor: "aliceblue",
        }}
      >
        <Box
          sx={{
            padding: { xs: "2.5rem 2rem", sm: "3rem" },
            width: { md: "50vw" },
          }}
        >
          <Typography variant="h1" gutterBottom>
            {LANDING_SUBTITLES.QUOTE}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontStyle: "italic", marginBottom: "1rem" }}
          >
            {LANDING_SUBTITLES.AUTHOR}
          </Typography>
          <CustomButton
            label={LANDING_BUTTON_LABELS.JOIN_PROGRAM}
            onClick={handleLogin}
            width="auto"
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50vw" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={landingbg}
            alt="landing-bg"
            sx={{
              minHeight: { xs: "50vh", md: "75vh" },
              width: "100%",
              backgroundSize: "cover",
            }}
          />
        </Box>
      </Box>

      <Box
        component="footer"
        sx={{
          marginTop: { xs: "0rem", md: "3rem" },
        }}
      ></Box>
    </Box>
  );
};

export default LandingPage;
