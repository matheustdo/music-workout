import { createUseStyles } from "react-jss";

import { sizes } from "../../constants/layout";

const useStyles = createUseStyles((theme) => ({
  wrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 20px",
  },
  container: {
    position: "relative",
    backgroundColor: theme.background.secondary,
    borderRadius: 10,
    maxWidth: sizes.pageMaxWidth,
    width: "100%",
    marginBottom: 20,
  },
  footer: {
    maxWidth: sizes.pageMaxWidth,
    width: "100%",
    color: theme.text.secondary,
  },
}));

export default useStyles;
