import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

const FilterSkeleton = ({ count = 4 }) => (
  <>
    {Array.from({ length: count }).map((_, idx) => (
      <MenuItem key={idx} disabled sx={{ py: 1.5 }}>
        <ListItemText primary={<Skeleton width="100%" height={25} />} />
      </MenuItem>
    ))}
  </>
);

export default FilterSkeleton;