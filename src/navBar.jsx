import React from "react";
import { Stack, Typography, Box, Divider } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
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
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));
export default function Nav({ setOpenSearch, setNavBarRight, setnavBarLeft }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  function handleMenuClick(e) {
    e.stopPropagation();
    if (isMobile) {
      setnavBarLeft("280px");
    } else {
      setNavBarRight("450px");
    }
  }

  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 42px",
        position: "fixed",
        top: scrolled ? "0" : "20px",
        zIndex: 999,
        backgroundColor: "white",
        borderRadius: "20px",
        width: "98%",
        left: "50%",
        transform: "translateX(-50%)",
        boxShadow: "2px 2px 54px 12px #f1f1f1",
      }}
    >
      {/*logo */}
      <Box sx={{ marginRight: { xs: "10px", md: "60px" } }}>
        <img
          src="/Salepush – SEO & Digital Marketing Theme_files/logo-1.png"
          style={{ width: "190px" }}
        />
      </Box>
      {/**links */}
      <Stack
        direction={"row"}
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",

            "&:hover .dropdown-menu": {
              opacity: 1,
              visibility: "visible",
              transform: "translateY(0)",
            },

            "&:hover .arrow-icon": {
              transform: "rotateX(180deg)",
            },
            "&:hover button::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "3px",
                backgroundImage:
                  "linear-gradient(45deg, #f7931e, #d63384, #6f42c1)",
                // transform: "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.3s ease",
              },

              // "&:hover::after": {
              //   // transform: "scaleX(1)",
              // },
            }}
            endIcon={
              <KeyboardArrowDownIcon
                className="arrow-icon"
                sx={{
                  transition: "0.3s",
                }}
              />
            }
          >
            Home
          </Button>

          {/* Dropdown Menu */}
          <Box
            className="dropdown-menu"
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              minWidth: "225px",
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              padding: "10px 0 10px 15px",
              opacity: 0,
              visibility: "hidden",
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              zIndex: 999,
            }}
          >
            {[
              "Home Layout 1",
              "Home Layout 2",
              "Home Layout 3",
              "Home Layout 4",
              "Home Layout 5",
              "Home Layout 6",
              "Home Layout 7",
              "Hoo Woo Shop",
            ].map((item, i) => (
              <Stack
                direction={"row"}
                key={i}
                spacing={1}
                sx={{
                  margin: "10px 10px",
                  cursor: "pointer",
                  "&:hover .inner-stack": {
                    width: "16px",
                  },
                }}
              >
                <Stack
                  className="inner-stack"
                  direction={"row"}
                  sx={{ alignItems: "end", width: "0px", overflow: "hidden" }}
                  spacing={0.5}
                >
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                </Stack>
                <Typography
                  sx={{
                    color: i == 0 ? "#ffae00" : "black",
                    "&:hover": { color: "#ffae00" },
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",

            "&:hover .dropdown-menu": {
              opacity: 1,
              visibility: "visible",
              transform: "translateY(0)",
            },

            "&:hover .arrow-icon": {
              transform: "rotateX(180deg)",
            },
            "&:hover button::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "3px",
                backgroundImage:
                  "linear-gradient(45deg, #f7931e, #d63384, #6f42c1)",
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
                className="arrow-icon"
                sx={{
                  transition: "0.3s",
                }}
              />
            }
          >
            Pages
          </Button>

          {/* Dropdown Menu */}
          <Box
            className="dropdown-menu"
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              minWidth: "225px",
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              padding: "10px 0 10px 15px",
              opacity: 0,
              visibility: "hidden",
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              zIndex: 999,
            }}
          >
            {[
              "About Us",
              "Our Team",
              "Team Details",
              "Our Gallery",
              "Shop",
              "Product Details",
              "Testimonials",
              "Coming Soon",
              "Page 404",
            ].map((item, i) => (
              <Stack
                direction={"row"}
                key={i}
                spacing={1}
                sx={{
                  margin: "10px 10px",
                  cursor: "pointer",
                  "&:hover .inner-stack": {
                    width: "16px",
                  },
                }}
              >
                <Stack
                  className="inner-stack"
                  direction={"row"}
                  sx={{ alignItems: "end", width: "0px", overflow: "hidden" }}
                  spacing={0.5}
                >
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                </Stack>
                <Typography
                  sx={{
                    "&:hover": { color: "#ffae00" },
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",

            "&:hover .dropdown-menu": {
              opacity: 1,
              visibility: "visible",
              transform: "translateY(0)",
            },

            "&:hover .arrow-icon": {
              transform: "rotateX(180deg)",
            },
            "&:hover button::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "3px",
                backgroundImage:
                  "linear-gradient(45deg, #f7931e, #d63384, #6f42c1)",
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
                className="arrow-icon"
                sx={{
                  transition: "0.3s",
                }}
              />
            }
          >
            Services
          </Button>

          {/* Dropdown Menu */}
          <Box
            className="dropdown-menu"
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              minWidth: "225px",
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              padding: "10px 0 10px 15px",
              opacity: 0,
              visibility: "hidden",
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              zIndex: 999,
            }}
          >
            {[
              "Our Services",
              "PPC Services",
              "SMM Services",
              "Website Building",
              "Pricing Table",
            ].map((item, i) => (
              <Stack
                direction={"row"}
                key={i}
                spacing={1}
                sx={{
                  margin: "10px 10px",
                  cursor: "pointer",
                  "&:hover .inner-stack": {
                    width: "16px",
                  },
                }}
              >
                <Stack
                  className="inner-stack"
                  direction={"row"}
                  sx={{ alignItems: "end", width: "0px", overflow: "hidden" }}
                  spacing={0.5}
                >
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                </Stack>
                <Typography
                  sx={{
                    "&:hover": { color: "#ffae00" },
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",

            "&:hover .dropdown-menu": {
              opacity: 1,
              visibility: "visible",
              transform: "translateY(0)",
            },

            "&:hover .arrow-icon": {
              transform: "rotateX(180deg)",
            },
            "&:hover button::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "3px",
                backgroundImage:
                  "linear-gradient(45deg, #f7931e, #d63384, #6f42c1)",
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
                className="arrow-icon"
                sx={{
                  transition: "0.3s",
                }}
              />
            }
          >
            Portofolio
          </Button>

          {/* Dropdown Menu */}
          <Box
            className="dropdown-menu"
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              minWidth: "225px",
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              padding: "10px 0 10px 15px",
              opacity: 0,
              visibility: "hidden",
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              zIndex: 999,
            }}
          >
            {[
              "Portofolio Grid",
              "Portofolio Masonary",
              "Portofolio Carsoul",
              "Portofolio Details",
            ].map((item, i) => (
              <Stack
                direction={"row"}
                key={i}
                spacing={1}
                sx={{
                  margin: "10px 10px",
                  cursor: "pointer",
                  "&:hover .inner-stack": {
                    width: "16px",
                  },
                }}
              >
                <Stack
                  className="inner-stack"
                  direction={"row"}
                  sx={{ alignItems: "end", width: "0px", overflow: "hidden" }}
                  spacing={0.5}
                >
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                </Stack>
                <Typography
                  sx={{
                    "&:hover": { color: "#ffae00" },
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",

            "&:hover .dropdown-menu": {
              opacity: 1,
              visibility: "visible",
              transform: "translateY(0)",
            },

            "&:hover .arrow-icon": {
              transform: "rotateX(180deg)",
            },
            "&:hover button::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "3px",
                backgroundImage:
                  "linear-gradient(45deg, #f7931e, #d63384, #6f42c1)",
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
                className="arrow-icon"
                sx={{
                  transition: "0.3s",
                }}
              />
            }
          >
            Blog
          </Button>

          {/* Dropdown Menu */}
          <Box
            className="dropdown-menu"
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              minWidth: "225px",
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              padding: "10px 0 10px 15px",
              opacity: 0,
              visibility: "hidden",
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              zIndex: 999,
            }}
          >
            {["Blog Default", "Blog Grid", "Blog List", "Blog Details"].map(
              (item, i) => (
                <Stack
                  direction={"row"}
                  key={i}
                  spacing={1}
                  sx={{
                    margin: "10px 10px",
                    cursor: "pointer",
                    "&:hover .inner-stack": {
                      width: "16px",
                    },
                  }}
                >
                  <Stack
                    className="inner-stack"
                    direction={"row"}
                    sx={{
                      alignItems: "end",
                      width: "0px",
                      overflow: "hidden",
                    }}
                    spacing={0.5}
                  >
                    <CircleIcon
                      sx={{
                        fontSize: "6px",
                        color: "#6565b7",
                        transform: "translateY(-3.5px)",
                      }}
                    />
                    <CircleIcon
                      sx={{
                        fontSize: "6px",
                        color: "#6565b7",
                        transform: "translateY(-3.5px)",
                      }}
                    />
                  </Stack>
                  <Typography
                    sx={{
                      "&:hover": { color: "#ffae00" },
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              )
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            position: "relative",

            "&:hover .dropdown-menu": {
              opacity: 1,
              visibility: "visible",
              transform: "translateY(0)",
            },

            "&:hover .arrow-icon": {
              transform: "rotateX(180deg)",
            },
            "&:hover button::after": {
              transform: "scaleX(1)",
            },
          }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              position: "relative",
              fontSize: "16px",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },

              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "100%",
                height: "3px",
                backgroundImage:
                  "linear-gradient(45deg, #f7931e, #d63384, #6f42c1)",
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
                className="arrow-icon"
                sx={{
                  transition: "0.3s",
                }}
              />
            }
          >
            Contact
          </Button>

          {/* Dropdown Menu */}
          <Box
            className="dropdown-menu"
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              minWidth: "225px",
              marginTop: "30px",
              backgroundColor: "white",
              borderRadius: "10px",
              paddingLeft: "20px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              padding: "10px 0 10px 15px",
              opacity: 0,
              visibility: "hidden",
              transform: "translateY(10px)",
              transition: "all 0.3s ease",
              zIndex: 999,
            }}
          >
            {["Contact Us", "Help &  Faqs"].map((item, i) => (
              <Stack
                direction={"row"}
                key={i}
                spacing={1}
                sx={{
                  margin: "10px 10px",
                  cursor: "pointer",
                  "&:hover .inner-stack": {
                    width: "16px",
                  },
                }}
              >
                <Stack
                  className="inner-stack"
                  direction={"row"}
                  sx={{ alignItems: "end", width: "0px", overflow: "hidden" }}
                  spacing={0.5}
                >
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                  <CircleIcon
                    sx={{
                      fontSize: "6px",
                      color: "#6565b7",
                      transform: "translateY(-3.5px)",
                    }}
                  />
                </Stack>
                <Typography
                  sx={{
                    "&:hover": { color: "#ffae00" },
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      </Stack>

      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", lg: "block" } }}
      />
      {/**phone phooto */}
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <img
          src="/imgi_89_default.png"
          alt=""
          style={{ width: "40px", height: "40px" }}
          className="imagePhoneNAv"
        />
      </Box>
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
          cursor: "pointer",
        }}
      >
        <SearchIcon
          sx={{ color: "white" }}
          onClick={(e) => {
            e.stopPropagation(); // ← منع وصول الحدث للـ document
            setOpenSearch(true);
          }}
        />
      </Stack>
      <Stack direction={"row"} spacing={4} sx={{ alignItems: "center" }}>
        {/**Free Seo Analysis */}
        <Button
          sx={{
            padding: "15px 30px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "700",
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
        <div className="menu" onClick={(e) => handleMenuClick(e)}>
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
  );
}
