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
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
//import SkypeIcon from "@mui/icons-material/Skype";

export default function NavBarLeft({ open, onClose }) {
  if (!open) return null;
  return (
    <Box
      sx={{
        position: "fixed",
        width: "105%",
        height: "100vh",
        background: "#8859a685",
        zIndex: "100000000",
        top: 0,
        direction: "lrt",
      }}
    >
      <ClickAwayListener onClickAway={onClose || (() => {})}>
        <Box
          sx={{
            background: "white",
            padding: "30px 40px",
            borderRadius: "20px",
            overflowX: "hidden",
            position: "fixed",
            width: "35%",
            direction: "ltr",
            overflowY: "auto",
            height: "90vh",
            top: "20px",
            left: "20px",
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari
            },
          }}
        >
          {/* Close Button */}
          <Stack
            direction={"row"}
            sx={{ justifyContent: "end", mb: 2 }}
            onClick={onClose}
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
                padding:"0",
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
          <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
            Contact Us
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOnIcon sx={{ color: "#2d2a4a" }} />
              <Typography sx={{fontSize:"15px",fontWeight:"400"}}>27 Division St, New York, United States</Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <MailIcon sx={{ color: "#2d2a4a" }} />
              <Typography sx={{fontSize:"15px",fontWeight:"400"}}>Salebot7iquid@gmail.com</Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneIcon sx={{ color: "#2d2a4a" }} />
              <Typography sx={{fontSize:"15px",fontWeight:"400"}}>
                Call Us:{" "}
                <Box component="span" sx={{ color: "#6c63a8" }}>
                  8 800 2563 123
                </Box>
              </Typography>
            </Stack>
          </Stack>
          {/* Social Icons */}
          <Stack direction="row" spacing={2} mt={4}>
            {[FacebookIcon, TwitterIcon, TelegramIcon].map((Icon, index) => (
              <IconButton
                key={index}
                sx={{
                  border: "1px solid #ddd",
                  color: "#6c63a8",
                  width: 40,
                  height: 40,
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}
