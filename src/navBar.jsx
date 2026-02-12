import { Stack, Typography, Box, Divider } from "@mui/material";
// import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";

// import Collapse from "@mui/material/Collapse";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import SendIcon from "@mui/icons-material/Send";

// import StarBorder from "@mui/icons-material/StarBorder";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    // color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles("dark", {
          color: "inherit",
        }),
      },
      //   "&:active": {
      //     backgroundColor: alpha(
      //       theme.palette.primary.main,
      //       theme.palette.action.selectedOpacity
      //     ),
      //},
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));
export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuitemOpen, setmenuitemOpen] = useState("0px");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuitemOpen = () => {
    setmenuitemOpen("16px");
  };
  const handleMenuitemClose = () => {
    setmenuitemOpen("0px");
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 42px",
          position: "sticky",
          top: 10,
          zIndex: 999,
          backgroundColor: "white",
          borderRadius: "20px",
          margin: "auto",
          width: "98%",
          boxShadow: "2px 2px 54px 12px #f1f1f1",
        }}
      >
        {/*logo */}
        <Box>
          <img
            src="/Salepush – SEO & Digital Marketing Theme_files/logo-1.png"
            style={{ width: "190px", marginRight: "20px" }}
          />
        </Box>
        {/**links */}
        <Box
          onMouseLeave={handleClose}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onMouseEnter={handleClick}
            onClick={handleClick}
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "2px",
                backgroundColor: "purple",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  transition: "transform 0.3s ease",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
          >
            Home
          </Button>
          <StyledMenu
            sx={{
              marginTop: "30px",
            }}
            id="demo-customized-menu"
            PaperProps={{
              sx: {
                padding: "20px 0px 20px 15px",
              },
            }}
            slotProps={{
              list: {
                "aria-labelledby": "demo-customized-button",
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              onMouseEnter: () => {},
            }}
          >
            <MenuItem
              onMouseEnter={handleMenuitemOpen}
              onMouseLeave={handleMenuitemClose}
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: menuitemOpen,
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 1</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 2</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 3</Typography>
            </MenuItem>
          </StyledMenu>
        </Box>
        <Box
          onMouseLeave={handleClose}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onMouseEnter={handleClick}
            onClick={handleClick}
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "2px",
                backgroundColor: "purple",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  transition: "transform 0.3s ease",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
          >
            Home
          </Button>
          <StyledMenu
            sx={{
              marginTop: "30px",
            }}
            id="demo-customized-menu"
            PaperProps={{
              sx: {
                padding: "20px 0px 20px 15px",
              },
            }}
            slotProps={{
              list: {
                "aria-labelledby": "demo-customized-button",
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              onMouseEnter: () => {},
            }}
          >
            <MenuItem
              onMouseEnter={handleMenuitemOpen}
              onMouseLeave={handleMenuitemClose}
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: menuitemOpen,
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 1</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 2</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 3</Typography>
            </MenuItem>
          </StyledMenu>
        </Box>
        <Box
          onMouseLeave={handleClose}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onMouseEnter={handleClick}
            onClick={handleClick}
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "2px",
                backgroundColor: "purple",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  transition: "transform 0.3s ease",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
          >
            Home
          </Button>
          <StyledMenu
            sx={{
              marginTop: "30px",
            }}
            id="demo-customized-menu"
            PaperProps={{
              sx: {
                padding: "20px 0px 20px 15px",
              },
            }}
            slotProps={{
              list: {
                "aria-labelledby": "demo-customized-button",
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              onMouseEnter: () => {},
            }}
          >
            <MenuItem
              onMouseEnter={handleMenuitemOpen}
              onMouseLeave={handleMenuitemClose}
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: menuitemOpen,
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 1</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 2</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 3</Typography>
            </MenuItem>
          </StyledMenu>
        </Box>
        <Box
          onMouseLeave={handleClose}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onMouseEnter={handleClick}
            onClick={handleClick}
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "2px",
                backgroundColor: "purple",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  transition: "transform 0.3s ease",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
          >
            Home
          </Button>
          <StyledMenu
            sx={{
              marginTop: "30px",
            }}
            id="demo-customized-menu"
            PaperProps={{
              sx: {
                padding: "20px 0px 20px 15px",
              },
            }}
            slotProps={{
              list: {
                "aria-labelledby": "demo-customized-button",
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              onMouseEnter: () => {},
            }}
          >
            <MenuItem
              onMouseEnter={handleMenuitemOpen}
              onMouseLeave={handleMenuitemClose}
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: menuitemOpen,
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 1</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 2</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 3</Typography>
            </MenuItem>
          </StyledMenu>
        </Box>
        <Box
          onMouseLeave={handleClose}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onMouseEnter={handleClick}
            onClick={handleClick}
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "2px",
                backgroundColor: "purple",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  transition: "transform 0.3s ease",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
          >
            Home
          </Button>
          <StyledMenu
            sx={{
              marginTop: "30px",
            }}
            id="demo-customized-menu"
            PaperProps={{
              sx: {
                padding: "20px 0px 20px 15px",
              },
            }}
            slotProps={{
              list: {
                "aria-labelledby": "demo-customized-button",
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              onMouseEnter: () => {},
            }}
          >
            <MenuItem
              onMouseEnter={handleMenuitemOpen}
              onMouseLeave={handleMenuitemClose}
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: menuitemOpen,
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 1</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 2</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 3</Typography>
            </MenuItem>
          </StyledMenu>
        </Box>
        <Box
          onMouseLeave={handleClose}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onMouseEnter={handleClick}
            onClick={handleClick}
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "2px",
                backgroundColor: "purple",
                transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              },

              "&:hover::after": {
                transform: "scaleX(1)",
              },
            }}
            endIcon={
              <KeyboardArrowDownIcon
                sx={{
                  transition: "transform 0.3s ease",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            }
          >
            Home
          </Button>
          <StyledMenu
            sx={{
              marginTop: "30px",
            }}
            id="demo-customized-menu"
            PaperProps={{
              sx: {
                padding: "20px 0px 20px 15px",
              },
            }}
            slotProps={{
              list: {
                "aria-labelledby": "demo-customized-button",
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              onMouseEnter: () => {},
            }}
          >
            <MenuItem
              onMouseEnter={handleMenuitemOpen}
              onMouseLeave={handleMenuitemClose}
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: menuitemOpen,
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 1</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 2</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  color: "purple",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "16px",
                  overflow: "hidden",
                }}
              >
                ..
              </Box>
              <Typography>Home Loyout 3</Typography>
            </MenuItem>
          </StyledMenu>
        </Box>
        {/**phone phooto */}
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <PhoneIcon />
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", lg: "block" } }}
        />
        {/** call number */}
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <Typography>Call us 24/7</Typography>
          <Typography>8 800 2563 123</Typography>
        </Box>
        {/** search icon */}
        <Stack
          direction="row"
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        >
          <SearchIcon sx={{ color: "white" }} />
        </Stack>
        <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
          {/**Free Seo Analysis */}
          <Button
            sx={{
              display: { xs: "none", md: "block", lg: "none" },
              color: "white",
              background: "#000",
              "&:hover": {
                background: "#ffae00",
              },
            }}
          >
            Free Seo Analysis
          </Button>
          {/**menu */}
          <div className="menu">
            <div
              style={{
                width: "20px",
                height: "2px",
                background: "black",
                marginBottom: "5px",
              }}
            ></div>
            <div
              style={{ width: "10px", height: "2px", background: "black" }}
            ></div>
          </div>
        </Stack>
      </Stack>
    </>
  );
}
