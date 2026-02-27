import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { CustomButton } from "../../../shared/components";

const DiscoverSkillCard = ({ skillData, onEnroll }) => {
  const navigate = useNavigate();

  const onSeeMore = (id) => {
    navigate(`/skillDetails/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={skillData.image}
        title={skillData.title}
      />
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
        <CustomButton onClick={onEnroll} label="Enroll" width="50%" />
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
