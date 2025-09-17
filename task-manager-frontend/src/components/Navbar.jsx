import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

function Navbar({ onLogout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left side (App title) */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>

        {/* Right side (Logout button) */}
        <Box>
          <Button 
            color="inherit" 
            variant="outlined" 
            onClick={onLogout}
            sx={{ borderColor: "white", color: "white" }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
