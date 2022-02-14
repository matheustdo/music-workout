import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";

import Logo from "../../assets/images/logo.svg";
import { lightScheme } from "../../constants/schemes";
import ThemeContext from "../../contexts/theming";
import useStyles from "./styles";

/**
 * The application's header.
 */
function Header() {
  const classes = useStyles();
  const { selectedTheme, switchTheme } = useContext(ThemeContext);

  return (
    <header className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.logoWrapper}>
          <img
            alt="logo"
            src={Logo}
            className={classes.logoImg}
            draggable={false}
          />
          <Typography fontSize={24} fontWeight={500}>
            Music Workout
          </Typography>
        </div>
        <div className={classes.endItems}>
          <span className={classes.separator} />
          <IconButton
            onClick={() => switchTheme()}
            style={{ color: selectedTheme.text.secondary }}
          >
            {selectedTheme === lightScheme ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
