import NavBarRight from "./navBarRight";
import "./App.css";
import Nav from "./navBar";
import Search from "./search";
import { useState } from "react";
import NavBarLeft from "./navBarLeft";
import Home from "./Components/home";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./themeAll.jsx";
function App() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNavBarRight, setNavBarRight] = useState("0");
  const [opennavBarLeft, setnavBarLeft] = useState("0");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav
        setOpenSearch={setOpenSearch}
        setNavBarRight={setNavBarRight}
        setnavBarLeft={setnavBarLeft}
      />
      <NavBarRight
        openNavBarRight={openNavBarRight}
        setNavBarRight={setNavBarRight}
      />
      <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <NavBarLeft
        opennavBarLeft={opennavBarLeft}
        setnavBarLeft={setnavBarLeft}
      />
      <Home />
    </ThemeProvider>
  );
}
export default App;
