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
  },
  frontText: {
    "&.MuiTypography-root": {
      lineHeight: 0.7,
    },
  },
  backCard: {
    display: "flex",
    justifyContent: "center",

    "& > *": {
      marginRight: 10,

      "&:last-of-type": {
        marginRight: 0,
      },
    },
  },
  buttonRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

export default useStyles;
