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
        Recent Activity
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
                      ? "Completed"
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
          No recent activity. Get started with your first lesson!
        </Typography>
      )}
    </Paper>
  );
};

export default ActivityList;
