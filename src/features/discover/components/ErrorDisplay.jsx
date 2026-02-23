import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorDisplay = ({ message = "Something went wrong" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        textAlign: "center",
        padding: 4,
      }}
    >
      <ErrorOutlineIcon
        sx={{
          fontSize: 80,
          color: "error.main",
          marginBottom: 2,
        }}
      />
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        Oops! Something went wrong
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ marginBottom: 3, maxWidth: 400 }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorDisplay;
