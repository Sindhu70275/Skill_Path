import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Skeleton,
  Paper,
} from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const ActivityList = ({ data, isLoading }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 3,
        boxShadow: 6,
        maxHeight: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
        Recent Activity
      </Typography>

      {isLoading ? (
        <Box sx={{ py: 2 }}>
          <Skeleton height={60} />
          <Skeleton height={60} />
          <Skeleton height={60} />
        </Box>
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
