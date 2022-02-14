import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "react-jss";

import useStyles from "./styles";

/**
 * A note field.
 */
function NoteField({ wrong, editable, value, setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  /**
   * This function handles the text field to receives just musical notes.
   */
  function handleChange(event) {
    const newValue = event.target.value;

    if (newValue) {
      const newUpper = newValue.toUpperCase();
      const firstChars = ["A", "B", "C", "D", "E", "F", "G"];

      if (newValue.length === 1) {
        if (firstChars.includes(newUpper)) {
          setValue(newUpper);
        }
      } else {
        const firstChar = newUpper.charAt(0);
        const lastChar = newUpper.charAt(1);

        if (lastChar === "#" || lastChar === "♯") {
          setValue(`${firstChar}♯`);
        } else if (lastChar === "B" || lastChar === "♭") {
          setValue(`${firstChar}♭`);
        }
      }
    } else {
      setValue("");
    }
  }

  return (
    <TextField
      inputProps={{
        min: 0,
        style: {
          fontSize: 24,
          textAlign: "center",
          fontWeight: 500,
          color: wrong ? theme.pallete.salmon : "",
        },
        maxLength: 2,
        className: classes.input,
      }}
      disabled={!editable}
      variant="standard"
      className={classes.textField}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
}

NoteField.defaultProps = {
  wrong: false,
  editable: true,
};

NoteField.propTypes = {
  wrong: PropTypes.bool,
  editable: PropTypes.bool,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default NoteField;
