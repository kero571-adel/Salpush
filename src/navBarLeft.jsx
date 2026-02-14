import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Stack,
  ClickAwayListener,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Email } from "@mui/icons-material";

export default function NavBarLeft({ opennavBarLeft, setnavBarLeft }) {
  console.log("opennavBarLeft: ", opennavBarLeft);
  return (
    <Stack
      sx={{
        zIndex: "100000000",
        position: "fixed",
        direction: "ltr",
        height: "100vh",
        top: 0,
        width: opennavBarLeft == "0" ? "0" : "100%",
        backgroundColor: "#221f3fe0",
        transition: "width 0s ease",
        justifyContent: "flex-start",
        direction: "ltr",
      }}
    >
      <ClickAwayListener onClickAway={() => setnavBarLeft("0")}>
        <Box
          sx={{
            zIndex: "100000000",
            width: {
              xs: opennavBarLeft == "0" ? "0" : opennavBarLeft,
              sm: opennavBarLeft == "0" ? "0" : "300px",
              md: opennavBarLeft == "0" ? "0" : "350px",
              lg: opennavBarLeft == "0" ? "0" : "400px",
            },
            background: "white",
            padding: opennavBarLeft == "0" ? "0" : "30px 40px",
            borderRadius: "20px",
            overflowX: "hidden",
            position: "fixed",
            direction: "ltr",
            overflowY: "auto",
            height: "100vh",
            top: "20px",
            left: "20px",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {/* Close Button */}
          <Stack
            direction={"row"}
            sx={{ justifyContent: "end", mb: 2 }}
            onClick={() => setnavBarLeft("0")}
          >
            <div
              style={{ width: "20px", marginBottom: "20px" }}
              className="closeSideBarRight"
            >
              <div></div>
              <div></div>
            </div>
          </Stack>
          {/* Search */}
          <Box sx={{ display: "flex", mb: 3 }}>
            <TextField
              fullWidth
              placeholder="Enter Keywords..."
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderRadius: 0,
                  "& fieldset": { border: "1px solid black" },
                },
              }}
            />
            <IconButton
              sx={{
                backgroundColor: "#f7931e",
                color: "#fff",
                borderRadius: 0,
                width: 60,
                "&:hover": { backgroundColor: "#e6820d" },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
          {/* Menu Items */}
          <div className="MenuLinks">
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                padding: "0",
                background: "transparent",
                boxShadow: "none", // يشيل أي ظل
                "&:before": {
                  display: "none", // يشيل الخط العلوي الافتراضي
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#2d2a4a",
                  }}
                >
                  Home
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <a href="">Home Layout 1</a>
                </Box>
                <Box>
                  <a href="">Home Layout 2</a>
                </Box>
                <Box>
                  <a href="">Home Layout 3</a>
                </Box>
                <Box>
                  <a href="">Home Layout 4</a>
                </Box>
                <Box>
                  <a href="">Home Layout 5</a>
                </Box>
                <Box>
                  <a href="">Home Layout 6</a>
                </Box>
                <Box>
                  <a href="">Home Layout 7</a>
                </Box>
                <Box>
                  <a href="">Home Woo Shop</a>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                background: "transparent",
                boxShadow: "none", // يشيل أي ظل
                "&:before": {
                  display: "none", // يشيل الخط العلوي الافتراضي
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#2d2a4a",
                  }}
                >
                  Pages
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <a href="">About Us</a>
                </Box>
                <Box>
                  <a href="">Our Team</a>
                </Box>
                <Box>
                  <a href="">Team Details</a>
                </Box>
                <Box>
                  <a href="">Our Gallery</a>
                </Box>
                <Box>
                  <a href="">Shop</a>
                </Box>
                <Box>
                  <a href="">Product Details</a>
                </Box>
                <Box>
                  <a href="">Testimonials</a>
                </Box>
                <Box>
                  <a href="">Coming Soon</a>
                </Box>
                <Box>
                  <a href="">Page 404</a>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                background: "transparent",
                boxShadow: "none", // يشيل أي ظل
                "&:before": {
                  display: "none", // يشيل الخط العلوي الافتراضي
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#2d2a4a",
                  }}
                >
                  Services
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <a href="">Our Services</a>
                </Box>
                <Box>
                  <a href="">PPC Services</a>
                </Box>
                <Box>
                  <a href="">SMM Services</a>
                </Box>
                <Box>
                  <a href="">WebSite Building</a>
                </Box>
                <Box>
                  <a href="">Pricing Table</a>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                background: "transparent",
                boxShadow: "none", // يشيل أي ظل
                "&:before": {
                  display: "none", // يشيل الخط العلوي الافتراضي
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#2d2a4a",
                  }}
                >
                  Portfolio
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <a href="">Portfolio Grid</a>
                </Box>
                <Box>
                  <a href="">Portfolio Masonry</a>
                </Box>
                <Box>
                  <a href="">Portfolio Carsoul</a>
                </Box>
                <Box>
                  <a href="">Portfolio Details</a>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                background: "transparent",
                boxShadow: "none", // يشيل أي ظل
                "&:before": {
                  display: "none", // يشيل الخط العلوي الافتراضي
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#2d2a4a",
                  }}
                >
                  Blog
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <a href="">Blog Default</a>
                </Box>
                <Box>
                  <a href="">Blog Grid</a>
                </Box>
                <Box>
                  <a href="">Blog List</a>
                </Box>
                <Box>
                  <a href="">Blog Details</a>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                background: "transparent",
                boxShadow: "none", // يشيل أي ظل
                "&:before": {
                  display: "none", // يشيل الخط العلوي الافتراضي
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#2d2a4a",
                  }}
                >
                  Contact
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <a href="">Contact Us</a>
                </Box>
                <Box>
                  <a href="">Help & Faqs</a>
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
          <Divider sx={{ my: 3 }} />
          {/* Contact Section */}
          <Typography sx={{ mb: "15px", fontSize: "23px", fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Stack spacing={2} sx={{ mb: "15px" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Stack
                sx={{
                  background: "#221f3f",
                  borderRadius: "5px",
                  p: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon sx={{ color: "white", fontSize: "17px" }} />
              </Stack>
              <Typography
                sx={{ color: "#6b6b76", fontSize: "14px", fontWeight: "400" }}
              >
                27 Division St, New York, United States
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Stack
                sx={{
                  background: "#221f3f",
                  borderRadius: "5px",
                  p: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Email sx={{ color: "white", fontSize: "17px" }} />
              </Stack>
              <Typography
                sx={{ color: "#6b6b76", fontSize: "14px", fontWeight: "400" }}
              >
                Salebot7iquid@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Stack
                sx={{
                  background: "#221f3f",
                  borderRadius: "5px",
                  p: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PhoneIcon sx={{ color: "white", fontSize: "17px" }} />
              </Stack>
              <Typography
                sx={{ color: "#6b6b76", fontSize: "14px", fontWeight: "400" }}
              >
                Call Us:{" "}
                <span style={{ color: "#6565b7" }}>8 800 2563 123</span>
              </Typography>
            </Stack>
          </Stack>
          {/* Social Icons */}
          <Stack direction="row" spacing={2} mt={4} sx={{ mb: "15px" }}>
            <IconButton
              sx={{
                border: "1px solid #d6d6e0",
                color: "#6c63a8",
                width: 45,
                height: 45,
                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(1)",
                  },
                  "50%": {
                    transform: "scale(1.2)",
                  },
                  "100%": {
                    transform: "scale(1)",
                  },
                },
                "&:hover": {
                  backgroundColor: "#ffae00",
                  color: "#fff",
                  animation: "pulse 0.8s ease-in-out infinite",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid #d6d6e0",
                color: "#6c63a8",
                width: 45,
                height: 45,
                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(1)",
                  },
                  "50%": {
                    transform: "scale(1.2)",
                  },
                  "100%": {
                    transform: "scale(1)",
                  },
                },
                "&:hover": {
                  backgroundColor: "#ffae00",
                  color: "#fff",
                  animation: "pulse 0.8s ease-in-out infinite",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid #d6d6e0",
                color: "#6c63a8",
                width: 45,
                height: 45,
                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(1)",
                  },
                  "50%": {
                    transform: "scale(1.2)",
                  },
                  "100%": {
                    transform: "scale(1)",
                  },
                },
                "&:hover": {
                  backgroundColor: "#ffae00",
                  color: "#fff",
                  animation: "pulse 0.8s ease-in-out infinite",
                },
              }}
            >
              <TelegramIcon />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid #d6d6e0",
                color: "#6c63a8",
                width: 45,
                height: 45,
                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(1)",
                  },
                  "50%": {
                    transform: "scale(1.2)",
                  },
                  "100%": {
                    transform: "scale(1)",
                  },
                },
                "&:hover": {
                  backgroundColor: "#ffae00",
                  color: "#fff",
                  animation: "pulse 0.8s ease-in-out infinite",
                },
              }}
            >
              <FontAwesomeIcon icon={faSkype} />
            </IconButton>
          </Stack>
        </Box>
      </ClickAwayListener>
    </Stack>
  );
}
