import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "../features/auth";
import theme from "./theme";

const queryClient = new QueryClient();

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
