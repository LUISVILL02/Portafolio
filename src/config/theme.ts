import { createTheme, ThemeOptions } from '@mui/material/styles';
import '@fontsource/ubuntu/400.css';

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    text: {
      secondary: "#FFFFFF"
    },
    primary: {
      main: '#ba86ff',
      dark: '#9f57ff',
      light: "#FFFFF"
    },
    secondary: {
      main: '#6412d1',
    },
    background: {
      default: '#1b1426',
      paper: 'rgba(0, 0, 0, 0.5)',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
    h2: {
      fontSize: 80,
    },
    button: {
      fontSize: 30,
    },
  },
});
