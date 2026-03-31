import { useContext } from "react";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

import { AuthContext } from "../../../features/auth/context/AuthContext";
import { CustomButton } from "../../../shared/components";

const ProfileHeader = () => {
  const { user } = useContext(AuthContext);

  const avatarSrc =
    user?.avatar ||
    "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "flex-start", md: "space-between" },
        alignItems: { xs: "flex-start", md: "center" },
        gap: 3,
        mb: 4,
        p: 2,
        borderRadius: 2,
        color: "white",
        position: "relative",
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          src={avatarSrc}
          alt={user.fullName}
          sx={{ width: { xs: 60, md: 120 }, height: { xs: 60, md: 120 } }}
        />
        <Box>
          <Typography variant="h4" sx={{ mb: 0.5 }}>
            {user.fullName}
          </Typography>
          <Typography variant="body2">{user.emailId}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          alignSelf: { xs: "stretch", md: "center" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <CustomButton label="Edit Profile" startIcon={<EditIcon />} fullWidth />
      </Box>
    </Box>
  );
};

export default ProfileHeader;
