import { createUseStyles } from "react-jss";

import { sizes } from "../../constants/layout";

const useStyles = createUseStyles((theme) => ({
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: `0px ${sizes.horizontalPadding}px`,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: sizes.pageMaxWidth,
    padding: "20px 0px",
  },
  separator: {
    backgroundColor: theme.stroke.hard,
    height: 24,
    width: 1,
    margin: "0px 5px",
    borderRadius: "100%",
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    color: "inherit",
    textDecoration: "inherit",
  },
  logoImg: {
    height: 24,
    marginRight: 8,
    userSelect: "none",
  },
  logoName: {
    "&.MuiTypography-root": {
      fontSize: 24,
      fontWeight: 500,
      verticalAlign: "middle",

      "@media (max-width: 500px)": {
        fontSize: 20,
      },
      "@media (max-width: 340px)": {
        display: "none",
      },
    },
  },
  endItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  themeButton: {
    "&.MuiButtonBase-root": {
      color: theme.text.secondary,

      "&:hover": {
        backgroundColor: `${theme.text.secondary}14`,

        "&:active": {
          backgroundColor: "transparent",
        },
      },
    },
  },
}));

export default useStyles;
