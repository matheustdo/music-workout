import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  section: {
    padding: 20,
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
}));

export default useStyles;
