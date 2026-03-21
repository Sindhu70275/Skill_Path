import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { useRegisterUser } from "../hooks/usePostRegisterUser.js";
import { AuthContext } from "../context/AuthContext.jsx";
import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";
import { CustomButton } from "../../../shared/components";
import { ROUTES } from "../../../shared/constants";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const showSnackbar = useContext(SnackbarContext);

  const [showPassword, setShowPassword] = useState(false);

  const { mutate: registerUser, isPending } = useRegisterUser();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      emailId: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    registerUser(data, {
      onSuccess: async (response) => {
        login(response.data.token, response.data.user);
        navigate(ROUTES.HOME);
        showSnackbar(response.message, "success");
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong";
        showSnackbar(message, "error");
      },
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" mb={2}>
            Create Account for Skill Path
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="username"
                control={control}
                rules={{
                  required: "Username is required",
                  minLength: {
                    value: 6,
                    message: "Username must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Username must be max 20 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9_-]{6,20}$/i,
                    message: "Username can only contain letters, numbers, -, _",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    id="username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
              <Controller
                name="emailId"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    id="emailId"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must contain uppercase, lowercase, number, special char (@$!%*?&)",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                )}
              />
              <CustomButton
                label={isPending ? "Creating Account..." : "Create Account"}
                type="submit"
                variant="contained"
                fullWidth
                disabled={isPending}
              />
            </Stack>
          </form>

          <Typography variant="body2" mt={2} textAlign="center">
            Already have an account?
            <Link to={ROUTES.LOGIN} style={{ color: "#1976d2" }}>
              Sign in
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
