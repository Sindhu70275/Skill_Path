import { useContext } from "react";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

import { AuthContext } from "../../../features/auth/context/AuthContext";

const ProfileHeader = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const avatarSrc =
    user?.avatar ||
    "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";
  const displayName = user?.name || "User Name";
  const bio = user?.bio || "No bio yet. Add a bio to share your story!";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        mb: 4,
        p: 3,
        borderRadius: 2,
        color: "white",
        position: "relative",
        boxShadow: 3,
      }}
    >
      <Avatar
        src={avatarSrc}
        alt={displayName}
        sx={{ width: 120, height: 120 }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600 }}>
          {displayName}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, mb: 1 }}>
          {bio}
        </Typography>
      </Box>
      <IconButton aria-label="Edit profile">
        <EditIcon />
      </IconButton>
    </Box>
  );
};

export default ProfileHeader;
