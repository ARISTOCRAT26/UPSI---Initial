import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AppBar, Avatar } from "@mui/material";
import { themeOptions } from "../../Theme";
import logo from "../../logo_info.png";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import profilePic from '../../rock.png'

function NavBarContent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={themeOptions}>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton color="inherit" edge="start">
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Infomatics" width={"240px"}></img>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Velox UPSI
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={99} color="secondary">
                <EmailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <HelpIcon />
            </IconButton>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton color="inherit"
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}>
              <Avatar src={profilePic} width="50px"/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar width="30px" /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
           <SettingsIcon sx={{marginRight:1.5}} />  
          Settings
        </MenuItem>
        <MenuItem>
            <Logout sx={{marginRight:1.5}} />
          Logout
        </MenuItem>
      </Menu>
    </ThemeProvider>
  );
}

export default function NavBar() {
  return <NavBarContent />;
}
