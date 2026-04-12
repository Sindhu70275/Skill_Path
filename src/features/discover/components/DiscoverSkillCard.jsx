import { useContext } from "react";
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

import { CustomButton } from "../../../shared/components";
import { useEnrollSkill } from "../../../shared/hooks/usePostEnrollSkill.js";
import { useAddWishlistSkill } from "../../../shared/hooks/usePostAddWishlistSkill.js";
import { useRemoveWishlistSkill } from "../../../shared/hooks/usePostRemoveWishlistSkill.js";
import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";
import {
  DISCOVER_BUTTONS,
  DISCOVER_LABELS,
} from "../../../shared/constants/messages";

const DiscoverSkillCard = ({ skillData }) => {
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

  const isComingSoon =
    skillData.modulesCount === 0 || skillData.modulesCount === undefined;

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
    if (skillData.isWishlisted) {
      removeWishlist(skillId, {
        onSuccess: (response) => {
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
    } else {
      addWishlist(skillId, {
        onSuccess: (response) => {
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
    }
  };

  return (
    <Card sx={{ maxWidth: "auto" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          sx={{ height: 180 }}
          image={skillData.image}
          title={skillData.title}
        />
        {isComingSoon && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h6"
              color="common.white"
              sx={{ fontWeight: "bold" }}
            >
              {DISCOVER_LABELS.COMING_SOON}
            </Typography>
          </Box>
        )}
        {!skillData.isEnrolled && !isComingSoon && (
          <IconButton
            onClick={() => handleWishlistToggle(skillData._id)}
            disabled={addPending || removePending || isComingSoon}
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
            {skillData.isWishlisted ? (
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
              ? DISCOVER_BUTTONS.ENROLLING
              : enrollSuccess || skillData.isEnrolled
                ? DISCOVER_BUTTONS.ENROLLED
                : DISCOVER_BUTTONS.ENROLL
          }
          width="50%"
          disabled={
            enrollPending ||
            skillData.isEnrolled ||
            enrollSuccess ||
            isComingSoon
          }
        />
        <CustomButton
          onClick={() => onSeeMore(skillData._id)}
          label={DISCOVER_BUTTONS.SEE_MORE}
          disabled={isComingSoon}
          variant="outline"
          width="40%"
        />
      </CardActions>
    </Card>
  );
};

export default DiscoverSkillCard;
