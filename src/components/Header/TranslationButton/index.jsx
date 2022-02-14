import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import {
  Button,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import i18next from "i18next";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "react-jss";

import useStyles from "./styles";

/**
 * A button which contains the platform language options.
 */
function TranslationButton() {
  const buttonRef = useRef();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const [buttonWidth, setButtonWidth] = useState(100);
  const availableLanguages = i18next.options.resources;
  const open = Boolean(anchorEl);
  const isSmall = useMediaQuery("@media (max-width: 430px)");

  /**
   * Handles the button click.
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Handles the menu close.
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * Switch the language to the new one.
   * @param {New language} language
   */
  const handleTranslation = (language) => {
    i18next.changeLanguage(language);
    handleClose();
  };

  /**
   * Select the initial paper width
   */
  useEffect(() => {
    const button = buttonRef.current;
    if (button.offsetWidth < 120) {
      setButtonWidth(120);
    } else {
      setButtonWidth(button.offsetWidth);
    }
  }, [buttonRef?.current?.offsetWidth]);

  return (
    <>
      <Button
        ref={buttonRef}
        id="translate-button"
        className={classes.button}
        onClick={handleClick}
      >
        <TranslateRoundedIcon
          style={{ marginRight: isSmall ? 0 : 8, fontSize: 24 }}
        />
        <Typography variant="body" className={classes.label}>
          {t("general.language")}
        </Typography>
        <KeyboardArrowDownRoundedIcon
          style={{ marginLeft: isSmall ? 0 : 5, fontSize: 20 }}
        />
      </Button>
      <Menu
        id="translate-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          style: {
            color: theme.text.primary,
          },
          className: classes.menu,
        }}
        PaperProps={{
          style: {
            backgroundColor: theme.background.secondary,
            width: buttonWidth,
            border: `1px solid ${theme.stroke.hard}`,
          },
          elevation: 0,
        }}
      >
        {Object.keys(availableLanguages).map((language) => (
          <MenuItem key={language} onClick={() => handleTranslation(language)}>
            <Typography variant="body">
              {availableLanguages[language].translation.general.language}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default TranslationButton;
