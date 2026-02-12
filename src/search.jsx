import { 
    Box, 
    TextField, 
    IconButton, 
    Stack, 
    ClickAwayListener 
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import { useState } from "react";
  
  export default function Search() {
    const [open, setOpen] = useState(true);
  
    if (!open) return null; // يقفل بالكامل
  
    return (
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          background: "#8859a685",
          zIndex: 100000000,
          top: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          transition: "all 0.4s ease",
        }}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
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
            <Box
              sx={{
                display: "flex",
                width: "70%",
              }}
            >
              <TextField
                fullWidth
                placeholder="Enter Keywords..."
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#e9e9ee",
                    borderRadius: 0,
                    "& fieldset": {
                      border: "none",
                    },
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
                  "&:hover": {
                    backgroundColor: "#e6820d",
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Stack>
        </ClickAwayListener>
      </Box>
    );
  }
  