import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  primary: {
    // light: will be calculated from palette.primary.main,
    main: "#3616ac",
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    light: "#0066ff",
    main: "#ffffff",
    // dark: will be calculated from palette.secondary.main,
    contrastText: "#ffcc00",
  },
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#366bac",
        },
      },
    },
  },
});

export default function CustomTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
