import ThemeContext from "../../context/theme-context";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, IconButton, Switch, Toolbar } from "@mui/material";
import { useContext } from "react";

const Header = () => {
  const themectx = useContext(ThemeContext);

  const x = () => {
    themectx.changeTheme();
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton href="/sign-in">
          <AccountCircleIcon />
        </IconButton>
        <Switch  aria-label="mode" color="primary" onChange={x} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
