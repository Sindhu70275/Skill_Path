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

import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";
import { useLoginUser } from "../hooks/usePostLoginUser.js";
import { CustomButton } from "../../../shared/components";
import {
  ROUTES,
  AUTH_TITLES,
  AUTH_LABELS,
  AUTH_BUTTON_LABELS,
  AUTH_VALIDATION,
} from "../../../shared/constants";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const showSnackbar = useContext(SnackbarContext);

  const [showPassword, setShowPassword] = useState(false);

  const { mutate: loginUser, isPending } = useLoginUser();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      emailId: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    loginUser(data, {
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
            {AUTH_TITLES.LOGIN}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
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
                label={
                  isPending
                    ? AUTH_BUTTON_LABELS.SIGNING_IN
                    : AUTH_BUTTON_LABELS.SIGN_IN
                }
                type="submit"
                variant="contained"
                fullWidth
                disabled={isPending}
              />
            </Stack>
          </form>

          <Typography variant="body2" mt={2} textAlign="center">
            Don’t have an account?{" "}
            <Link to={ROUTES.REGISTER} style={{ color: "#1976d2" }}>
              {AUTH_BUTTON_LABELS.CREATE_ONE}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
