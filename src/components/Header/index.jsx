import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";

import { lightScheme } from "../../constants/schemes";
import ThemeContext from "../../contexts/theming";
import useStyles from "./styles";

function Header() {
  const classes = useStyles();
  const { selectedTheme, switchTheme } = useContext(ThemeContext);

  return (
    <header className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.topRow}>
          <div className={classes.logo}>
            <span className={classes.logoIcon}>🎶</span>
            <Typography>Musical Workout</Typography>
          </div>
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
        <span className={classes.separator} />
      </div>
    </header>
  );
}

export default Header;
