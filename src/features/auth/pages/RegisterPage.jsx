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
import {
  ROUTES,
  AUTH_TITLES,
  AUTH_LABELS,
  AUTH_BUTTON_LABELS,
  AUTH_LINK_TEXTS,
  AUTH_VALIDATION,
} from "../../../shared/constants";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const showSnackbar = useContext(SnackbarContext);

  const [showPassword, setShowPassword] = useState(false);

  const { mutate: registerUser, isPending } = useRegisterUser();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
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
        px: 2,
      }}
    >
      <Card sx={{ width: 400, padding: 2 }}>
        <CardContent>
          <Typography variant="h5" mb={2}>
            {AUTH_TITLES.REGISTER}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="fullName"
                control={control}
                rules={{
                  required: AUTH_VALIDATION.FULL_NAME_REQUIRED,
                  minLength: {
                    value: 2,
                    message: AUTH_VALIDATION.FULL_NAME_MIN_LENGTH,
                  },
                  maxLength: {
                    value: 50,
                    message: AUTH_VALIDATION.FULL_NAME_MAX_LENGTH,
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]{2,50}$/,
                    message: AUTH_VALIDATION.FULL_NAME_PATTERN,
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    id="fullName"
                    label={AUTH_LABELS.FULL_NAME}
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
                  required: AUTH_VALIDATION.EMAIL_REQUIRED,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: AUTH_VALIDATION.EMAIL_INVALID,
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    id="emailId"
                    label={AUTH_LABELS.EMAIL}
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
                  required: AUTH_VALIDATION.PASSWORD_REQUIRED,
                  minLength: {
                    value: 8,
                    message: AUTH_VALIDATION.PASSWORD_MIN_LENGTH,
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: AUTH_VALIDATION.PASSWORD_PATTERN,
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    id="password"
                    label={AUTH_LABELS.PASSWORD}
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
                label={isPending ? AUTH_BUTTON_LABELS.CREATING_ACCOUNT : AUTH_BUTTON_LABELS.CREATE_ACCOUNT}
                type="submit"
                variant="contained"
                fullWidth
                disabled={isPending}
              />
            </Stack>
          </form>

          <Typography variant="body2" mt={2} textAlign="center">
            {AUTH_LINK_TEXTS.LOGIN_FROM_REGISTER}{" "}
            <Link to={ROUTES.LOGIN} style={{ color: "#1976d2" }}>
              {AUTH_BUTTON_LABELS.SIGN_IN}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
