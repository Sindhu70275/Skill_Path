import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import VisibilityIcon from "@mui/icons-material/Visibility";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { CustomButton } from "../../../shared/components";
import { useRemoveWishlistSkill } from "../../../shared/hooks/usePostRemoveWishlistSkill.js";
import { useEnrollSkill } from "../../../shared/hooks/usePostEnrollSkill.js";
import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";

const WishlistCard = ({ skillData }) => {
  const navigate = useNavigate();
  const showSnackbar = useContext(SnackbarContext);
  const {
    mutate: enrollSkill,
    isPending: enrollPending,
    isSuccess: enrollSuccess,
  } = useEnrollSkill();
  const {
    mutate: removeWishlist,
    isPending,
    isSuccess,
  } = useRemoveWishlistSkill();

  const handleViewDetails = (id) => {
    navigate(`/skillDetails/${id}`);
  };

  const handleEnroll = (skillId) => {
    enrollSkill(skillId, {
      onSuccess: async (response) => {
        showSnackbar(response.message, "success");
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong";
        showSnackbar(message, "error");
      },
    });
  };

  const handleRemoveFromWishlist = (skillId) => {
    removeWishlist(skillId, {
      onSuccess: async (response) => {
        showSnackbar(response.message, "success");
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong";
        showSnackbar(message, "error");
      },
    });
  };

  const wishlistedDate = skillData.wishlistedAt
    ? new Date(skillData.wishlistedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Recently";

  return (
    <Card
      sx={{
        maxWidth: "auto",
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
            height: { xs: 220, lg: 180 },
            objectFit: "cover",
          }}
        />

        <IconButton
          onClick={() => handleViewDetails(skillData._id)}
          sx={{
            position: "absolute",
            top: 8,
            right: 48,
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

        <IconButton
          onClick={() => handleRemoveFromWishlist(skillData._id)}
          disabled={isPending || isSuccess}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "error.main",
            "&:hover": {
              backgroundColor: "error.main",
              color: "white",
            },
          }}
        >
          <BookmarkIcon />
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

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <BookmarkIcon sx={{ fontSize: 16, color: "text.secondary" }} />
          <Typography variant="caption" color="text.secondary">
            Wishlisted on {wishlistedDate}
          </Typography>
        </Box>

        <CustomButton
          label="Enroll Now"
          onClick={() => handleEnroll(skillData._id)}
          variant="contained"
          disabled={enrollPending || enrollSuccess}
        />
      </Box>
    </Card>
  );
};

export default WishlistCard;
