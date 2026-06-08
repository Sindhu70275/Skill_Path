import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  PROFILE_TITLES,
  PROFILE_LABELS,
  PROFILE_CHIP_LABELS,
} from "../../../shared/constants/messages";
import ActivityListSkeleton from "./ActivityListSkeleton";

dayjs.extend(relativeTime);

const ActivityList = ({ data, isLoading }) => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: 6,
        maxHeight: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        color="primary.main"
      >
        {PROFILE_TITLES.RECENT_ACTIVITY}
      </Typography>

      <Divider sx={{ mt: 2 }} />

      {isLoading ? (
        <ActivityListSkeleton />
      ) : data && data.length > 0 ? (
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <List>
            {data.map((item) => (
              <ListItem key={item.id} divider>
                <ListItemText
                  primary={`${item.skillTitle} → ${item.moduleTitle}`}
                  secondary={`${item.lessonTitle} • ${dayjs(item.date).fromNow()}`}
                />
                <Chip
                  label={
                    item.isCompleted
                      ? PROFILE_CHIP_LABELS.COMPLETED
                      : `${Math.round(item.progressPercentage * 100)}%`
                  }
                  color={item.isCompleted ? "success" : "warning"}
                  variant="outlined"
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Typography variant="body2" color="text.secondary" sx={{ py: 4 }}>
          {PROFILE_LABELS.NO_ACTIVITY}
        </Typography>
      )}
    </Paper>
  );
};

export default ActivityList;
