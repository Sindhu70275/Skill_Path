import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import SkillIcon from "../assets/skill-path.png";

const pages = [
  { page: "Discover", path: "/" },
  { page: "Dashboard", path: "/dashboard" },
  { page: "Analytics", path: "/analytics" },
];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    navigate(path);
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {pages.map((page) => (
              <NavLink
                to={page.path}
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline" : "none",
                  fontSize: "1rem",
                })}
                key={page.page}
              >
                <Typography sx={{ textTransform: "none" }}>
                  {page.page}
                </Typography>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{ "& .MuiPaper-root": { borderRadius: "0.5rem" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.page}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                  sx={{ width: 48, height: 48 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                "& .MuiPaper-root": {
                  border: "0.05rem solid #0d0d0d4d",
                  borderRadius: "0.5rem",
                },
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
