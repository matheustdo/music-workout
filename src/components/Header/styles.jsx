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
  },
  logoImg: {
    height: 24,
    marginRight: 8,
    userSelect: "none",
  },
  endItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default useStyles;
