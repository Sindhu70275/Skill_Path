import { useState } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";

import DiscoverSkillsFilter from "./DiscoverSkillsFilter";

const DiscoverHeader = ({
  searchSkill,
  setSearchSkill,
  skillFilter,
  setSkillFilter,
  setDebouncedSearch,
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
    setFilterOpen(true);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
    setFilterAnchorEl(null);
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "7.5rem", md: "10rem" },
        backgroundImage: "linear-gradient(to right, #b3d9ff, #e6f2ff, #e6f2ff)",
        borderRadius: "1rem",
        mt: 2,
      }}
    >
      <Typography>
        Find the right&nbsp;
        <Typography
          component="span"
          variant="h4"
          sx={{
            fontSize: { xs: "1.2rem", md: "2.25rem" },
          }}
        >
          Skill Path
        </Typography>
        &nbsp;for you
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TextField
          placeholder="Search for skills by name"
          variant="outlined"
          size="medium"
          value={searchSkill}
          onChange={(e) => setSearchSkill(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setDebouncedSearch(searchSkill);
            }
          }}
          sx={{
            width: { xs: "14rem", md: "28rem" },
            backgroundColor: "#ffffff",
            borderRadius: "0.5rem",
            marginTop: "0.7rem",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": {
              fontSize: { xs: "0.75rem", md: "1rem" },
              padding: { xs: "0.5rem", md: "0.75rem" },
            },
          }}
          InputProps={{
            endAdornment: (
              <>
                <Divider orientation="vertical" flexItem />
                <InputAdornment position="end">
                  <IconButton aria-label="search" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              </>
            ),
          }}
        />
        <Button
          sx={{
            backgroundColor: "#ffffff",
            color: "black",
            ml: 1,
            mt: "0.7rem",
            minWidth: "auto",
            px: { xs: 1, sm: 2 },
          }}
          onClick={handleFilterClick}
          startIcon={<FilterListIcon />}
        >
          <Typography
            variant="button"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Filter
          </Typography>
        </Button>
        <DiscoverSkillsFilter
          anchorEl={filterAnchorEl}
          open={filterOpen}
          onClose={handleFilterClose}
          skillFilter={skillFilter}
          setSkillFilter={setSkillFilter}
        />
      </Stack>
    </Stack>
  );
};

export default DiscoverHeader;
