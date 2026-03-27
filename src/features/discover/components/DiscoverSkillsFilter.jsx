import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import { useSkillTags } from "../hooks/useGetSkillTags";
import FilterSkeleton from "./FilterSkeleton";

const DiscoverSkillsFilter = ({
  anchorEl,
  open,
  onClose,
  skillFilter,
  setSkillFilter,
}) => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");

  const { isLoading, data: skillTags } = useSkillTags(open);

  const handleClearAll = (e) => {
    e.stopPropagation();
    setSkillFilter([]);
  };

  const filteredSkillNames = skillTags?.filter((name) =>
    name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: 220, sm: 260 },
          marginTop: { xs: 1.5, md: 7 },
        },
      }}
    >
      <Box
        sx={{
          p: 1,
          position: "sticky",
          top: 3,
          bgcolor: theme.palette.background.paper,
          zIndex: 1,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <OutlinedInput
          placeholder="Search skills..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          size="small"
          fullWidth
          autoFocus
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          }
          onClick={(e) => e.stopPropagation()}
        />
      </Box>

      <Box sx={{ maxHeight: {xs: 150 , md: 200}, overflow: "auto" }}>
        {isLoading ? (
          <FilterSkeleton />
        ) : (
          <>
            {filteredSkillNames?.map((name) => {
              const selected = skillFilter.includes(name);
              return (
                <MenuItem
                  key={name}
                  value={name}
                  onClick={(e) => {
                    e.stopPropagation();
                    const newValue = selected
                      ? skillFilter.filter((item) => item !== name)
                      : [...skillFilter, name];
                    setSkillFilter(newValue);
                  }}
                >
                  <Checkbox checked={selected} />
                  <ListItemText primary={name} />
                </MenuItem>
              );
            })}

            {filteredSkillNames?.length === 0 && (
              <MenuItem disabled>
                <ListItemText primary="No skills found" />
              </MenuItem>
            )}
          </>
        )}
      </Box>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          bgcolor: theme.palette.background.paper,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleClearAll}
          sx={{
            justifyContent: "center",
            textTransform: "none",
            color: "#ffffff",
            padding: "0.5rem 4rem",
            marginTop: "0.5rem",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          Clear all
        </Button>
      </Box>
    </Menu>
  );
};

export default DiscoverSkillsFilter;
