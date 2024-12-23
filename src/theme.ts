import {createTheme} from "@mui/material";
import RalewayWoff from "./assets/fonts/Raleway-Regular.woff"
const theme = createTheme({
    typography: {
        fontFamily: [
"Raleway",
            'sans-serif',
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Raleway';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
      },
    palette: {
        primary: {
            main: "#fff",
            contrastText: "#253746"
        },
        secondary: {
            main: "#253746",
            contrastText: "#fff"
        },
        warning: {
            main: "#fdbd01"
        },
        info: {
            main: "#8d101c"
        },
        error: {
            main: "#cb0001"
        },
        success: {
            main: "#00782e",
            contrastText: "#fff"
        },
        background: {
            default: "#f5f5f5"
        }
    }
})


export default theme;