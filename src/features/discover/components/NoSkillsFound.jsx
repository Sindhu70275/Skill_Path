import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const NoSkillsFound = () => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "20rem",
      }}
    >
      <Typography variant="h2">No matches yet</Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Try adjusting your search or filters.
      </Typography>
    </Stack>
  );
};

export default NoSkillsFound;
