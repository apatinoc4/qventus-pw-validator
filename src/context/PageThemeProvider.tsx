import { FC, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface PageThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          backgroundColor: "#e7005e",
          borderRadius: "5px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "white",
        },
      },
    },
  },
});

const PageThemeProvider: FC<PageThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PageThemeProvider;
