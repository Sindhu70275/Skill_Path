import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import skillpath from "../../assets/skill-path.png";
import landingbg from "../../assets/landing-bg.jpg";
import CustomButton from "../../common/CustomButton";
import { ROUTES } from "../../constants/routes";
import { TITLES, SUBTITLES, BUTTON_LABELS } from "../../constants/messages";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(ROUTES.AUTH);
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
          padding: "0rem 0.6rem 0rem 0.4rem",
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={skillpath}
            alt="skill-path"
            sx={{
              height: "2.5rem",
              width: "3rem",
              marginRight: "0.3rem",
            }}
          />
          <Typography
            sx={{
              color: "#58b0ed",
              fontStyle: "italic",
              fontSize: "1.5rem",
              marginTop: "2rem",
            }}
          >
            {TITLES.APP_TITLE}
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
          <Typography variant="h1" component="h1" gutterBottom>
            {SUBTITLES.LANDING_QUOTE}
          </Typography>
          <Typography variant="h4" component="h4" sx={{ fontStyle: "italic" }}>
            {SUBTITLES.LANDING_AUTHOR}
          </Typography>
          <CustomButton
            label={BUTTON_LABELS.JOIN_PROGRAM}
            onClick={handleLogin}
            sx={{ mt: 3 }}
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
