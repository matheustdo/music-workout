import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "react-jss";

import useStyles from "./styles";

/**
 * A note field.
 */
function NoteField({
  wrong,
  editable,
  value,
  onChange,
  id,
  onKeyDown,
  ...rest
}) {
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
          onChange(newUpper);
        }
      } else {
        const firstChar = newUpper.charAt(0);
        const lastChar = newUpper.charAt(1);

        if (lastChar === "#" || lastChar === "♯") {
          onChange(`${firstChar}♯`);
        } else if (lastChar === "B" || lastChar === "♭") {
          onChange(`${firstChar}♭`);
        }
      }
    } else {
      onChange("");
    }
  }

  /**
   * Handle notefield click.
   */
  function handleClick(event) {
    event.preventDefault();
    const input = event.target;
    const size = input.value.length;
    input.setSelectionRange(size, size);
  }

  /**
   * Handle notefield focus.
   */
  function handleFocus(event) {
    event.preventDefault();
    const input = event.target;
    const size = input.value.length;
    input.setSelectionRange(size, size);
  }

  return (
    <div {...rest}>
      <TextField
        id={id}
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
        onKeyDown={(e) => onKeyDown(e)}
        onClick={(e) => handleClick(e)}
        onFocus={(e) => handleFocus(e)}
      />
    </div>
  );
}

NoteField.defaultProps = {
  wrong: false,
  editable: true,
  id: undefined,
  onKeyDown: () => {},
};

NoteField.propTypes = {
  wrong: PropTypes.bool,
  editable: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  id: PropTypes.string,
};

export default NoteField;
