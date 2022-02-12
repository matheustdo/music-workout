import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/styles.css";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./contexts/theming";
import Router from "./router";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
