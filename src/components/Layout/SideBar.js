import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SideBarData } from "./SideBarData";
import { Link } from "react-router-dom";
import { themeOptions } from "../../Theme";
import { ThemeProvider } from "@mui/material";

const drawerWidth = 250;

export default function PermanentDrawerLeft(props) {
  return (
    <ThemeProvider theme={themeOptions}>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar></Toolbar>
      <Divider />
      <List>
        {SideBarData.map((sidebarItem) => (
          <ListItem key={sidebarItem.key} disablePadding>
            <ListItemButton component={Link} to={sidebarItem.path}>
              <ListItemIcon>{sidebarItem.icon}</ListItemIcon>
              <ListItemText primary={sidebarItem.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
      {/* Can be done by passing a prop as well
        <List>
          {props.sideData.map((sideItem) => (
            <ListItem key={sideItem.key}>
              <ListItemButton component={Link} to={sideItem.path}>
                <ListItemIcon>{sideItem.icon}</ListItemIcon>
                <ListItemText primary={sideItem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
    </Drawer>
    </ThemeProvider>
  );
}
