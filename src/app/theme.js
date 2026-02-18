import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#58b0ed",
    },
    secondary: {
      main: "#0d0b0b",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    display: "flex",

    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#0d0b0b",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#0d0b0b",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#0d0b0b",
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: "#0d0b0b",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#0d0b0b",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#0d0b0b",
    },
    h7: {
      fontSize: "1.75rem",
      fontWeight: 200,
      color: "#0d0b0b",
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#0d0b0b",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
      color: "rgba(0, 0, 0, 0.54)",
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
