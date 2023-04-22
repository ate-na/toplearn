import { createContext, useState } from "react";

const ThemeContext = createContext({
  mode: "light",
  changeTheme: () => {},
});

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme((theme) => {
      if (theme === "dark") {
        return "light";
      } else if (theme === "light") {
        return "dark";
      }
    });
  };
  const content = {
    mode: theme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={content}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
