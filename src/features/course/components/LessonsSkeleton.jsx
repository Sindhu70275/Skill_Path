import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const LessonsSkeleton = ({ count = 3 }) => {
  return (
    <Stack sx={{ p: 1 }}>
      {Array.from({ length: count }).map((_, index) => (
        <ListItem key={index} disablePadding sx={{ py: 1 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Skeleton variant="circular" width={20} height={20} />
          </ListItemIcon>
          <ListItemText
            primary={<Skeleton width="60%" />}
            secondary={
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.5}
                sx={{ mt: 0.5 }}
              >
                <Skeleton
                  variant="text"
                  width={40}
                  sx={{ fontSize: "0.75rem" }}
                />
              </Stack>
            }
          />
        </ListItem>
      ))}
    </Stack>
  );
};

export default LessonsSkeleton;
