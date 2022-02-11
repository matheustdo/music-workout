import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/styles.css";
import { ThemeProvider } from "./contexts/theming";
import ScalesTrainer from "./pages/ScalesTrainer";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <ScalesTrainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
