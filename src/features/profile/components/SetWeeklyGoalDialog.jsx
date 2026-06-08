import { useState } from "react";
import {
  PROFILE_TITLES,
  PROFILE_LABELS,
  PROFILE_BUTTONS,
} from "../../../shared/constants/messages";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import { CustomButton } from "../../../shared/components";

const SetWeeklyGoalDialog = ({ open, onClose, currentGoal, onSave }) => {
  const [goal, setGoal] = useState(currentGoal || 5);

  const handleSave = () => {
    onSave(goal);
    onClose();
  };

  const handleSliderChange = (event, newValue) => {
    setGoal(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontSize: "1.5rem" }}>
        {PROFILE_TITLES.DIALOG_GOAL}
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {PROFILE_LABELS.GOAL_SUBTITLE}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {PROFILE_LABELS.LESSONS_PREVIEW.replace('{lessons}', goal)}
          </Typography>
          <Slider
            value={goal}
            onChange={handleSliderChange}
            min={1}
            max={20}
            step={1}
            marks={[
              { value: 5, label: "5 lessons" },
              { value: 10, label: "10 lessons" },
              { value: 15, label: "15 lessons" },
            ]}
            sx={{ color: "primary.main" }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <CustomButton
          label={PROFILE_BUTTONS.CANCEL}
          onClick={onClose}
          variant="outlined"
        />
        <CustomButton label={PROFILE_BUTTONS.SAVE_GOAL} onClick={handleSave} />
      </DialogActions>
    </Dialog>
  );
};

export default SetWeeklyGoalDialog;
