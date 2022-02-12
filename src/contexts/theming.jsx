/* eslint-disable react/jsx-no-constructed-context-values */
import {
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material/";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { createContext, useState, useEffect, useMemo } from "react";
import { ThemeProvider as JssThemeProvider } from "react-jss";

import { lightScheme, darkScheme } from "../constants/schemes";

const ThemeContext = createContext({});

/**
 * The ThemeProvider is a wrapper to JssThemeProvider that allows switch themes.
 * */
export function ThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [selectedTheme, setSelectedTheme] = useState(lightScheme);

  /**
   * Load last selected theme or the prefered color scheme.
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem("@musical-workout/lastTheme");

    if (savedTheme) {
      setSelectedTheme(savedTheme === "light" ? lightScheme : darkScheme);
    } else {
      setSelectedTheme(prefersDarkMode ? darkScheme : lightScheme);
    }
  }, [prefersDarkMode]);

  /**
   * Switch the theme mode between light, dark or an auto value based on css prefers-color-scheme.
   */
  function switchTheme() {
    if (selectedTheme === lightScheme) {
      setSelectedTheme(darkScheme);
      localStorage.setItem("@musical-workout/lastTheme", "dark");
    } else {
      setSelectedTheme(lightScheme);
      localStorage.setItem("@musical-workout/lastTheme", "ligth");
    }
  }

  /**
   * Generate a theme to be used on Material-ui components.
   */
  const muiTheme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
          fontWeight: 400,
          fontSize: 16,
          lineHeight: "20.8px",
          letterSpacing: "-0.00833em",
        },
        palette: {
          background: {
            default: selectedTheme.background.main,
          },
          primary: {
            main: selectedTheme.primary,
          },
          secondary: {
            main: selectedTheme.secondary,
          },
          text: {
            primary: selectedTheme.text.primary,
            secondary: selectedTheme.text.secondary,
          },
        },
      }),
    [selectedTheme]
  );

  return (
    <ThemeContext.Provider value={{ switchTheme, selectedTheme }}>
      <JssThemeProvider theme={selectedTheme}>
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </JssThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ThemeContext;
