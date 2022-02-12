import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    backgroundColor: theme.background.tertiary,
    height: 200,
    width: "100%",
  },
  contentWrapper: {
    position: "absolute",
    top: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0px 20px",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    backgroundColor: theme.background.secondary,
    borderRadius: 10,
    maxWidth: 900,
    width: "100%",
    boxShadow: "1px 3px 10px -1px rgba(0,0,0,0.47)",
    padding: 20,
  },
  guessSection: {
    margin: "40px 0px",
  },
  checkSection: {
    margin: "40px 0px",
  },
  checkItems: {
    "-webkit-flex-direction": "unset !important",
  },
  checkItem: {
    display: "inline",
    width: 70,
  },
}));

export default useStyles;
