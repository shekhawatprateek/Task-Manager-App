import { AppBar, Toolbar, Button } from "@mui/material";

function Navbar({ onLogout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={onLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
