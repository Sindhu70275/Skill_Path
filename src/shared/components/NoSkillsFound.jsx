import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const NoSkillsFound = ({ title, subtitle, icon: Icon }) => {

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "20rem",
        textAlign: "center",
      }}
      spacing={2}
    >
      {Icon && <Icon sx={{ fontSize: 64, color: "text.secondary" }} />}
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1" color="text.secondary">
        {subtitle}
      </Typography>
    </Stack>
  );
};

export default NoSkillsFound;
