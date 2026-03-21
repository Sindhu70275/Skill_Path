import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import SkillIcon from "../../assets/skill-path.png";

const SplashScreen = () => {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar position="static" sx={{ paddingX: { md: "2rem" } }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box component="img" src={SkillIcon} sx={{ height: 40 }} />
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontStyle: "italic",
                  fontSize: "1.5rem",
                  mt: "0.2rem",
                }}
              >
                Skill Path
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", minWidth: 70, height: 24 }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", minWidth: 70, height: 24 }}
              />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Skeleton variant="circular" width={35} height={35} />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Skeleton
                variant="rectangular"
                width={30}
                height={25}
                sx={{ borderRadius: 2 }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box component="img" src={SkillIcon} sx={{ height: 40 }} />
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.main,
                  fontStyle: "italic",
                  fontSize: "1.5rem",
                  mt: "0.2rem",
                }}
              >
                Skill Path
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Skeleton variant="circular" width={35} height={35} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 72px)",
          gap: 2,
          p: 2,
        }}
      >
        <CircularProgress size={40} />
      </Box>
    </Box>
  );
};

export default SplashScreen;
