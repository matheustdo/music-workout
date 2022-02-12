import { createUseStyles } from "react-jss";

import { sizes } from "../../constants/layout";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  contentWrapper: {
    position: "relative",
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
    maxWidth: sizes.pageMaxWidth,
    width: "100%",
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
