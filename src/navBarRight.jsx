import {
  Box,
  Divider,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
// import SkypeIcon from "@mui/icons-material/Skype";
const services = [
  "Content Marketing",
  "Social Marketing",
  "Web Development",
  "App Development",
  "SEO Optimization",
  "PPC Advertising",
];
export default function NavBarRight() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "105%",
        height: "100vh",
        background: "#8859a685",
        zIndex: "100000000",
        top: 0,
        direction: "rtl",
      }}
    >
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
          right: "20px",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari
          },
        }}
      >
        <Stack direction={"row"} sx={{ justifyContent: "end", mb: 2 }}>
          <div style={{ width: "20px" }} className="closeSideBarRight">
            <div></div>
            <div></div>
          </div>
        </Stack>
        <img
          src="/Salepush – SEO & Digital Marketing Theme_files/logo-1.png"
          style={{ width: "190px", marginBottom: "20px" }}
        />
        <Typography sx={{ mb: "15px" }}>
          We are passionate about our work. Our designers stay ahead to provide
          engaging and user-friendly website designs to make your business stand
          out.
        </Typography>
        <Divider sx={{ mb: "15px" }} />
        <Typography>Our Services</Typography>
        <List>
          {services.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "list-item",
                listStyleType: "disc",
                color: "#6c63a8",
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "24px",
                  color: "#6b6b76",
                  fontWeight: 500,
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
            <Typography sx={{ color: "#6b6b76", fontSize: 18 }}>
              <strong>Address:</strong> 27 Division St, New York, United States
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <MailIcon sx={{ color: "#6c63a8" }} />
            <Typography sx={{ color: "#6b6b76", fontSize: 18 }}>
              <strong>Mail:</strong> Salebot7iquid@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <PhoneIcon sx={{ color: "#6c63a8" }} />
            <Typography sx={{ color: "#6b6b76", fontSize: 18 }}>
              <strong>Call us 24/7:</strong> 8 800 2563 123
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
              "&:hover": {
                backgroundColor: "#6c63a8",
                color: "#fff",
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
              "&:hover": {
                backgroundColor: "#6c63a8",
                color: "#fff",
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
              "&:hover": {
                backgroundColor: "#6c63a8",
                color: "#fff",
              },
            }}
          >
            <TelegramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
