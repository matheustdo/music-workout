import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import { lightScheme } from "../../constants/schemes";
import ThemeContext from "../../contexts/theming";
import useStyles from "./styles";
import TranslationButton from "./TranslationButton";

/**
 * The application's header.
 */
function Header() {
  const classes = useStyles();
  const { selectedTheme, switchTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <header className={classes.wrapper}>
      <div className={classes.container}>
        <Link to="/" className={classes.logoWrapper}>
          <img
            alt="logo"
            src={Logo}
            className={classes.logoImg}
            draggable={false}
          />
          <Typography className={classes.logoName}>
            {t("general.platformName")}
          </Typography>
        </Link>
        <div className={classes.endItems}>
          <TranslationButton />
          <span className={classes.separator} />
          <IconButton
            onClick={() => switchTheme()}
            className={classes.themeButton}
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
