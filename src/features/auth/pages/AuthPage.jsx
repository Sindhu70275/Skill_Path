import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import { AuthContext } from "../context/AuthContext.jsx";
import CustomButton from "../../../common/CustomButton";
import { ROUTES } from "../../../constants/routes";

const roles = [
  { label: "Student", id: 1 },
  { label: "Professional", id: 2 },
];

const skillList = [
  { label: "JavaScript", id: 1 },
  { label: "Python", id: 2 },
  { label: "React", id: 3 },
  { label: "Node.js", id: 4 },
  { label: "TypeScript", id: 5 },
  { label: "SQL", id: 6 },
  { label: "AWS", id: 7 },
  { label: "Docker", id: 8 },
];

const AuthPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      role: null,
      skills: [],
    },
  });

  const onSubmit = (data) => {
    login(data);
    navigate(ROUTES.HOME);
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
            Welcome to Skill Path
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
              <Controller
                name="role"
                control={control}
                rules={{ required: "Role is required" }}
                render={({ field, fieldState: { error } }) => (
                  <Autocomplete
                    {...field}
                    value={field.value || null}
                    onChange={(_, newValue) => field.onChange(newValue)}
                    disablePortal
                    options={roles}
                    getOptionLabel={(option) => option?.label || ""}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Role"
                        fullWidth
                        error={!!error}
                        helperText={error?.message}
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="skills"
                control={control}
                rules={{
                  required: "At least one skill is required",
                  validate: (value) =>
                    (value && value.length > 0) ||
                    "At least one skill is required",
                }}
                render={({ field, fieldState: { error } }) => (
                  <Autocomplete
                    multiple
                    id="skills-demo"
                    disableCloseOnSelect
                    value={field.value || []}
                    onChange={(event, newValue, reason) => {
                      if (
                        reason === "selectOption" ||
                        reason === "removeOption"
                      ) {
                        field.onChange(newValue);
                      }
                    }}
                    options={skillList}
                    getOptionLabel={(option) => option?.label || ""}
                    isOptionEqualToValue={(option, val) => option.id === val.id}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => {
                        const { key, ...tagProps } = getTagProps({ index });
                        return (
                          <Chip
                            key={key}
                            label={option.label}
                            {...tagProps}
                            onClick={(e) => e.stopPropagation()}
                          />
                        );
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Skills"
                        placeholder="Select your skills"
                        error={!!error}
                        helperText={error?.message}
                      />
                    )}
                  />
                )}
              />
              <CustomButton
                label="Continue"
                type="submit"
                variant="contained"
                fullWidth
              />
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuthPage;
