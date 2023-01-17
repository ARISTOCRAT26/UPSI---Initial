import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Button } from "@mui/material";


function NavBarContent() {
  return (
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed" 
          color="primary"
        >
          <Toolbar>
          <Button sx={{marginLeft:76}} variant="contained" color="secondary">Save</Button>
          <Button sx={{marginLeft:3}} variant="contained" color="secondary">Preview</Button>
          <Button sx={{marginLeft:3}} variant="contained" color="secondary">Submit</Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default function NavBar() {
  return <NavBarContent />;
}