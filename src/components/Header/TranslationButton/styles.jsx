import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  button: {
    "&.MuiButtonBase-root": {
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      textTransform: "none",
      color: theme.text.secondary,

      "&:hover": {
        backgroundColor: `${theme.text.secondary}14`,

        "&:active": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  label: {
    "@media (max-width: 430px)": {
      display: "none",
    },
  },
}));

export default useStyles;
