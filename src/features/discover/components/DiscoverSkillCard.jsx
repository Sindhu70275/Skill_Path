import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { AuthContext } from "../../auth";
import { CustomButton } from "../../../shared/components";
import { useEnrollSkill } from "../../../shared/hooks/usePostEnrollSkill.js";
import { useAddWishlistSkill } from "../../../shared/hooks/usePostAddWishlistSkill.js";
import { useRemoveWishlistSkill } from "../../../shared/hooks/usePostRemoveWishlistSkill.js";
import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";

const DiscoverSkillCard = ({ skillData, enrolledIds, wishlistedIds }) => {
  const navigate = useNavigate();
  const showSnackbar = useContext(SnackbarContext);
  const {
    mutate: enrollSkill,
    isPending: enrollPending,
    isSuccess: enrollSuccess,
  } = useEnrollSkill();
  const { mutate: addWishlist, isPending: addPending } = useAddWishlistSkill();
  const { mutate: removeWishlist, isPending: removePending } =
    useRemoveWishlistSkill();

  const isEnrolled = enrolledIds.has(skillData._id);
  const isWishlisted = wishlistedIds.has(skillData._id);
  const [wishlisted, setWishlisted] = useState(isWishlisted);

  useEffect(() => {
    setWishlisted(isWishlisted);
  }, [isWishlisted]);

  const onSeeMore = (id) => {
    navigate(`/skillDetails/${id}`);
  };

  const onEnroll = (skillId) => {
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

  const handleWishlistToggle = (skillId) => {
    if (wishlisted) {
      removeWishlist(skillId, {
        onSuccess: (response) => {
          (showSnackbar(response.message, "success"), setWishlisted(false));
        },
        onError: (error) => {
          const message =
            error?.response?.data?.message ||
            error?.message ||
            "Something went wrong";
          showSnackbar(message, "error");
        },
      });
    } else {
      addWishlist(skillId, {
        onSuccess: (response) => {
          showSnackbar(response.message, "success");
          setWishlisted(true);
        },
        onError: (error) => {
          const message =
            error?.response?.data?.message ||
            error?.message ||
            "Something went wrong";
          showSnackbar(message, "error");
        },
      });
    }
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          sx={{ height: 180 }}
          image={skillData.image}
          title={skillData.title}
        />
        {!isEnrolled && (
          <IconButton
            onClick={() => handleWishlistToggle(skillData._id)}
            disabled={addPending || removePending}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
            }}
          >
            {wishlisted ? (
              <BookmarkIcon sx={{ color: "error.main" }} />
            ) : (
              <BookmarkBorderIcon sx={{ color: "text.secondary" }} />
            )}
          </IconButton>
        )}
      </Box>
      <CardContent sx={{ padding: "1rem" }}>
        <Typography gutterBottom variant="h5" component="div">
          {skillData.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
          }}
        >
          {skillData.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", padding: "0rem 1rem 1rem 1rem" }}
      >
        <CustomButton
          onClick={() => onEnroll(skillData._id)}
          label={
            enrollPending
              ? "Enrolling..."
              : enrollSuccess || isEnrolled
                ? "Enrolled"
                : "Enroll"
          }
          width="50%"
          disabled={enrollPending || isEnrolled || enrollSuccess}
        />
        <CustomButton
          onClick={() => onSeeMore(skillData._id)}
          label="See More"
          variant="outline"
          width="40%"
        />
      </CardActions>
    </Card>
  );
};

export default DiscoverSkillCard;
