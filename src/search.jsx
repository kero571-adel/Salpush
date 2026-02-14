import React from "react";
import {
  Box,
  TextField,
  IconButton,
  Stack,
  ClickAwayListener,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Search({ openSearch, setOpenSearch }) {
  console.log("openSearch: ", openSearch);
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: openSearch ? "100vh" : "0px",
        background: "#221f3fe0",
        zIndex: 100000000,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        transition: "height 0.3s ease",
        overflow: "hidden",
      }}
    >
      <ClickAwayListener onClickAway={() => setOpenSearch(false)}>
        <Box sx={{ width: "100%" }}>
          <Stack
            sx={{
              width: "100%",
              padding: "50px",
              minHeight: "250px",
              background: "#221f3f",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", width: "70%" }}>
              <TextField
                fullWidth
                placeholder="Enter Keywords..."
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#e9e9ee",
                    borderRadius: 0,
                    "& fieldset": { border: "none" },
                  },
                  "& input": {
                    padding: "18px",
                    fontSize: "18px",
                    color: "#555",
                  },
                }}
              />
              <IconButton
                sx={{
                  backgroundColor: "#f7931e",
                  color: "#fff",
                  borderRadius: 0,
                  width: 70,
                  "&:hover": { backgroundColor: "#e6820d" },
                }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}
