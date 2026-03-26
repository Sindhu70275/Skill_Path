import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const SkillHeader = ({ skillData }) => {
  const { title, description, image, category, level } = skillData;

  return (
    <Box>
      {image && (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: { md: 350 },
            objectFit: "cover",
            borderRadius: 2,
            mb: 3,
          }}
        />
      )}

      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontWeight: 700, color: "secondary.main" }}
      >
        {title}
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip
          label={category}
          sx={{
            backgroundColor: "primary.main",
            color: "#ffffff",
            fontWeight: 500,
          }}
        />
        <Chip
          label={level}
          variant="outlined"
          sx={{
            borderColor: "secondary.main",
            color: "secondary.main",
            fontWeight: 500,
          }}
        />
      </Stack>

      <Typography
        variant="body1"
        sx={{ mb: 4, color: "text.secondary", lineHeight: 1.8 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default SkillHeader;
