import { useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SkillIcon from "../../assets/skill-path.png";
import landingbg from "../../assets/landing-bg.jpg";
import { CustomButton } from "../../shared/components";
import { ROUTES } from "../../shared/constants";
import { SUBTITLES, BUTTON_LABELS } from "../../shared/constants/messages";

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
          padding: "1rem 0.6rem 1rem 0.4rem",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            src={SkillIcon}
            alt="Skill Path Logo"
            sx={{ height: 40, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              color: theme.palette.primary.main,
              fontStyle: "italic",
              fontSize: "1.5rem",
              cursor: "pointer",
              marginTop: "0.2rem",
            }}
          >
            Skill Path
          </Typography>
        </Box>
        <Box>
          <CustomButton label={BUTTON_LABELS.LOGIN} onClick={handleLogin} />
        </Box>
      </AppBar>

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "aliceblue",
        }}
      >
        <Box sx={{ padding: "3rem", width: "50vw" }}>
          <Typography variant="h1" gutterBottom>
            {SUBTITLES.LANDING_QUOTE}
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontStyle: "italic", marginBottom: "1rem" }}
          >
            {SUBTITLES.LANDING_AUTHOR}
          </Typography>
          <CustomButton
            label={BUTTON_LABELS.JOIN_PROGRAM}
            onClick={handleLogin}
          />
        </Box>
        <Box>
          <Box
            component="img"
            src={landingbg}
            alt="landing-bg"
            sx={{
              height: "75vh",
              width: "50vw",
            }}
          />
        </Box>
      </Box>

      <Box
        component="footer"
        sx={{
          marginTop: "3rem",
        }}
      ></Box>
    </Box>
  );
};

export default LandingPage;
