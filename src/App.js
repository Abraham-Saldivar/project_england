import "./App.css";
import NavBar from "./Components/Navbar.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#D40C2E",
      },
      secondary: {
        main: "#B6A491",
      },
      background: {
        paper: "#52b788",
      },
    },
    typography: {
      body1: {
        color: "#FFFFFF",
      },
      fontFamily: ["Lato"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
