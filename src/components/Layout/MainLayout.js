import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import PermanentDrawerLeft from "./SideBar";
import { SideBarData } from "./SideBarData";

import { themeOptions } from "../../Theme";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Rudresh Pandit
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function MainHome() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <PermanentDrawerLeft sideData={SideBarData} />
        <NavBar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "85vh",
            m: 2,
            p: 2,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      {/* <Copyright /> */}
    </ThemeProvider>
  );
}

export default function MainLayout() {
  return <MainHome />;
}
