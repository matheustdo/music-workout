import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  textField: {
    width: 30,
    borderRadius: "100%",

    "& .MuiInput-root": {
      "& .Mui-focused": {
        color: theme.text.primary,
      },
      "&::before": {
        borderBottom: `1px solid ${theme.text.secondary}`,
      },
      "&.Mui-disabled": {
        "&::before": {
          borderBottom: `1px solid${theme.text.primary}`,
          borderBottomStyle: "solid !important",
        },
      },
    },
    "& .MuiInput-root:hover": {
      "&::before": {
        color: theme.text.primary,
        borderBottom: `2px solid ${theme.text.secondary}`,
      },
      "&.Mui-disabled": {
        "&::before": {
          color: theme.text.primary,
          borderBottom: `1px solid ${theme.text.primary}`,
        },
      },
    },
  },
  input: {
    "&.MuiInput-input": {
      "-webkit-text-fill-color": "unset !important",
      color: theme.text.secondary,
      transition: "all 0.1s ease",

      "&.Mui-disabled": {
        color: theme.text.primary,
        transition: "all 0.1s ease",
      },
    },
    "&:focus": {
      color: theme.text.primary,
    },
  },
}));

export default useStyles;
