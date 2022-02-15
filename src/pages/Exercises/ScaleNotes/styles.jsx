import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  section: {
    position: "relative",
    padding: 20,
    width: "100%",
  },
  checkItems: {
    "-webkit-flex-direction": "unset !important",
    display: "grid",
    columnGap: 15,
  },
  checkItem: {
    display: "inline",
    width: 70,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: theme.stroke.soft,
  },
  exerciseWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 350,

    "&::before": {
      content: "''",
    },
  },
  frontCard: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    "@media (max-width: 440px)": {
      alignItems: "center",
      flexDirection: "column",
    },
  },
  frontText: {
    "&.MuiTypography-root": {
      lineHeight: 0.7,
      marginRight: 20,

      "&:last-of-type": {
        marginRight: 0,
        marginLeft: 20,
      },
      "@media (max-width: 440px)": {
        marginRight: 0,
        marginBottom: 20,

        "&:last-of-type": {
          marginTop: 20,
          marginLeft: 0,
        },
      },
    },
  },
  backCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: 10,

    "@media (max-width: 440px)": {
      marginBottom: 30,
    },
  },
  buttonRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    float: "left",
  },
}));

export default useStyles;
