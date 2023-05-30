import { Box, Toolbar, Typography, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import LogoDevIcon from "@mui/icons-material/LogoDev";
function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <LogoDevIcon sx={{ fontSize: "5vh" }} />
          </IconButton>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            padding={2}
          >
            <Typography sx={{ fontSize: "2vh" }}>UNIVERSITY OF</Typography>
            <Typography sx={{ fontSize: "2.5vh" }}>HOUSTON RUGBY</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
