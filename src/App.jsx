import { AppBar, Container } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Container>
      <AppBar
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img src="/" alt="logo" />
        </Box>
      </AppBar>
    </Container>
  );
}
export default App;
