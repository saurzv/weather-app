import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f0f0f0",
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
  typography: {
    h2: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 500,
    },
    h3: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 100,
    },
    subtitle1: {
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 300,
    },
  },
});
