import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "../features/auth";
import theme from "./theme";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
