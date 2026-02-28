import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "../features/auth";
import { SnackbarProvider } from "../shared/context/SnackbarContext.jsx";
import theme from "./theme";

const queryClient = new QueryClient();

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
