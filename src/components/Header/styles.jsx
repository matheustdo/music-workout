import { createUseStyles } from "react-jss";

import { sizes } from "../../constants/layout";

const useStyles = createUseStyles((theme) => ({
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: "0px 20px",

    "&::before": {
      content: "''",
      width: "100%",
      top: 0,
      bottom: -100,
      position: "absolute",
      backgroundColor: theme.background.tertiary,
      zIndex: -1,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: sizes.pageMaxWidth,
    marginBottom: 20,
    padding: "20px 0px",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    backgroundColor: theme.background.secondary,
    height: 1,
    width: "100%",
    margin: "15px 0px",
    borderRadius: "100%",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoIcon: {
    fontSize: 36,
    marginRight: 10,
    filter:
      "invert(0%) sepia(0%) saturate(100%) hue-rotate(300deg) brightness(100%) contrast(130%);",
  },
}));

export default useStyles;
