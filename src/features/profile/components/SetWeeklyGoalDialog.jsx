import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const SetWeeklyGoalDialog = ({ open, onClose, currentGoal, onSave }) => {
  const [goal, setGoal] = useState(currentGoal || "");

  const handleQuickSelect = (value) => {
    setGoal(value.toString());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[1-9]$|^1[0-9]$|^20$/.test(value)) {
      setGoal(value);
    }
  };

  const handleSave = () => {
    const numGoal = parseInt(goal, 10) || 5;
    onSave(numGoal);
    onClose();
  };

  const isValid = goal === "" || /^[1-9]$|^1[0-9]$|^20$/.test(goal);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ pb: 1 }}>
        <Typography variant="h5" fontWeight={600}>
          Lessons this week
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type number or use chips (1-20)
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ pt: 1 }}>
        <Box sx={{ px: 2, pb: 2 }}>
          <TextField
            value={goal}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            placeholder="5"
            inputProps={{
              style: {
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: 700,
                min: 1,
                max: 20,
              },
            }}
            sx={{
              width: "100%",
              mb: 3,
              "& .MuiInputBase-input": {
                py: 2.5,
                borderRadius: 2,
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderWidth: 2,
                },
              },
            }}
            error={!isValid}
          />
          <Typography variant="body2" sx={{ mb: 3, textAlign: "center" }}>
            lessons this week
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "center",
            }}
          >
            {[1, 3, 5, 7, 10, 14, 20].map((value) => (
              <Chip
                key={value}
                label={value}
                onClick={() => handleQuickSelect(value)}
                sx={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  "&:hover": { backgroundColor: "primary.100" },
                  ...(goal == value && {
                    backgroundColor: "primary.main",
                    color: "white",
                  }),
                }}
                clickable
                size="small"
                variant="outlined"
              />
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} size="large" fullWidth>
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          size="large"
          fullWidth
          disabled={!isValid}
        >
          Set Goal
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SetWeeklyGoalDialog;
