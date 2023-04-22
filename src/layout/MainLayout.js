import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "../core/theme/light";
import { darkTheme } from "../core/theme/dark";
import { CssBaseline } from "@mui/material";
import Header from "../common/header";
import { useContext } from "react";
import ThemeContext from "../context/theme-context";

const MainLayout = ({ children }) => {
  const themectx = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themectx.mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Header />
      {children}
    </ThemeProvider>
  );
};
export default MainLayout;
