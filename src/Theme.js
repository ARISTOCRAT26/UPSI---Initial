import { createTheme } from '@mui/material/styles';


export const themeOptions =createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#17b8b3',
      },
      secondary: {
        main: '#ffffff',
      },
      background: {
        default: '#C8E5EC',
      },
      divider: '#565656',
      
    },
    typography: {
      fontFamily: 'Lato', 
    }
  });
