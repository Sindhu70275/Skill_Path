import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorDisplay = ({ message = "Please try again." }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "50vh",
        padding: 4,
      }}
    >
      <Stack spacing={3} alignItems="center">
        <ErrorOutlineIcon
          sx={{
            fontSize: 80,
            color: "error.main",
            marginBottom: 1,
          }}
        />
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "text.primary",
            fontWeight: 600,
          }}
        >
          Oops! Something went wrong
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: 400,
          }}
        >
          {message}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ErrorDisplay;
