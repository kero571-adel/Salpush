import React from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ClickAwayListener
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import DraftsIcon from "@mui/icons-material/Drafts";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
const services = [
  "Content Marketing",
  "Social Marketing",
  "Web Development",
  "App Development",
  "SEO Optimization",
  "PPC Advertising",
];
export default function NavBarRight({ openNavBarRight, setNavBarRight }) {
  console.log("openNavBarRight: ", openNavBarRight);
  return (
    <Box
      sx={{
        zIndex: "100000000",
        position: "fixed",
        direction: "ltr",
        height: "100vh",
        top: 0,
        width: openNavBarRight == "0" ? "0" : "100%",
        backgroundColor: "#221f3fe0",
        transition: "width 0s ease",
      }}
    >
      <ClickAwayListener onClickAway={() => setNavBarRight("0")}>
        <Box
          sx={{
            overflowY: "auto",
            position: "fixed",
            width: openNavBarRight == "0" ? "0px" : "450px",
            padding: openNavBarRight == "0" ? "0" : "30px 40px",
            background: "white",
            borderRadius: "20px",
            overflowX: "hidden",
            height: "100vh",
            top: "20px",
            right: "20px",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Stack
            direction={"row"}
            sx={{ justifyContent: "end", mb: 2 }}
            onClick={() => setNavBarRight("0")}
          >
            <div style={{ width: "20px" }} className="closeSideBarRight">
              <div></div>
              <div></div>
            </div>
          </Stack>
          <img
            src="/Salepush – SEO & Digital Marketing Theme_files/logo-1.png"
            style={{ width: "190px", marginBottom: "20px" }}
          />
          <Typography
            sx={{
              mb: "15px",
              color: "#6d6c79",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            We are passionate about our work. Our designers stay ahead to
            provide engaging and user-friendly website designs to make your
            business stand out.
          </Typography>
          <Divider sx={{ mb: "15px" }} />
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            Our Services
          </Typography>
          <List>
            {services.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  color: "#6c63a8",
                  padding: "1px 0",
                  cursor: "pointer",
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: "15px",
                    color: "#6d6c79",
                    fontWeight: 400,
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ mb: "15px" }} />
          <Typography sx={{ mb: "15px" }}>Contact Us</Typography>
          <Stack spacing={2} sx={{ mb: "15px" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOnIcon sx={{ color: "#6c63a8" }} />
              <Typography
                sx={{ color: "#6b6b76", fontSize: "16px", fontWeight: "400" }}
              >
                <strong style={{ color: "black" }}>Address:</strong> 27 Division
                St, New York, United States
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <DraftsIcon sx={{ color: "#6c63a8" }} />
              <Typography
                sx={{ color: "#6b6b76", fontSize: "16px", fontWeight: "400" }}
              >
                <strong style={{ color: "black" }}>Mail:</strong>{" "}
                Salebot7iquid@gmail.com
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <PhoneIcon sx={{ color: "#6c63a8" }} />
              <Typography
                sx={{ color: "#6b6b76", fontSize: "16px", fontWeight: "400" }}
              >
                <strong style={{ color: "black" }}>Call us 24/7:</strong> 8 800
                2563 123
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
    </Box>
  );
}
