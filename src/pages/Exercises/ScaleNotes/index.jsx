/* eslint-disable react/no-array-index-key */
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  pitches,
  pitchLabels,
  pitchList,
} from "../../../constants/definitions";
import { getRandom } from "../../../util/functions";
import NoteField from "./NoteField";
import useStyles from "./styles";

/**
 * This pages does the major scale notes exercise.
 */
function ScaleNotes(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [pitch, setPitch] = useState(getRandom(pitchList));
  const [guessing, setGuessing] = useState(true);
  const [checkedPitches, setCheckedPitches] = useState(pitchList);
  const [notes, setNotes] = useState(["", "", "", "", "", "", ""]);
  const [errors, setErrors] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  /**
   * Clean notes array.
   */
  function clearNotes() {
    setNotes(["", "", "", "", "", "", ""]);
    setErrors([false, false, false, false, false, false, false]);
  }

  /**
   * Set the a note.
   * @param {Note index} index
   */
  function handleNoteChange(newValue, index) {
    const newNotes = notes.slice();
    newNotes[index] = newValue;
    setNotes(newNotes);
  }

  /**
   * Handles the next button onClick event.
   */
  function handleNextButton() {
    if (guessing) {
      const scale = pitches[pitch].diatonic.naturalMajor;
      const newErrors = errors.slice();
      const newNotes = notes.slice();

      scale.forEach((note, index) => {
        if (notes[index].length > 0 && pitchLabels[note] !== notes[index]) {
          newErrors[index] = true;
          newNotes[index] = pitchLabels[note];
        } else {
          newNotes[index] = pitchLabels[note];
        }
      });

      setNotes(newNotes);
      setErrors(newErrors);
      setGuessing(false);
    } else {
      let newNote = getRandom(checkedPitches);

      while (newNote === pitch) {
        newNote = getRandom(checkedPitches);
      }

      setPitch(newNote);
      setGuessing(true);
      clearNotes();
    }
  }

  /**
   * Handles the checkbox event.
   */
  function handleCheckBox(newState, checkboxPitch) {
    if (newState) {
      setCheckedPitches((oldPitches) => [...oldPitches, checkboxPitch]);
    } else {
      setCheckedPitches((oldPitches) =>
        oldPitches.filter((e) => e !== checkboxPitch)
      );
    }
  }

  return (
    <div {...props}>
      <div className={classes.section}>
        <Typography color="text.secondary">
          {t("exercises.scaleNotes.scalesTitle")}
        </Typography>
        <FormGroup className={classes.checkItems}>
          {pitchList.map((note) => (
            <FormControlLabel
              key={note}
              control={
                <Checkbox
                  defaultChecked
                  onChange={(e, newState) => handleCheckBox(newState, note)}
                />
              }
              label={pitchLabels[note]}
              className={classes.checkItem}
              disableTypography
            />
          ))}
        </FormGroup>
      </div>
      <div className={classes.separator} />
      <div className={classes.section} style={{ height: "100%" }}>
        <Typography color="text.secondary" style={{ marginBottom: 20 }}>
          {t("exercises.scaleNotes.practiceTitle")}
        </Typography>
        <div className={classes.exerciseWrapper}>
          <div className={classes.frontCard}>
            <Typography
              display="inline"
              color="text.secondary"
              className={classes.frontText}
            >
              {t("exercises.scaleNotes.guessThe")}
            </Typography>
            <Typography
              variant="h2"
              display="inline"
              color="primary"
              className={classes.frontText}
              fontWeight={500}
              style={{ margin: 0 }}
            >
              {pitchLabels[pitch]}
            </Typography>
            <Typography
              display="inline"
              color="text.secondary"
              className={classes.frontText}
            >
              {t("exercises.scaleNotes.scales.major")}
            </Typography>
          </div>
          <div className={classes.backCard}>
            {notes.map((note, index) => (
              <NoteField
                key={index}
                editable={guessing}
                value={notes[index]}
                onChange={(newValue) => handleNoteChange(newValue, index)}
                wrong={errors[index]}
                style={{ display: "inline-block" }}
              />
            ))}
          </div>
          <div className={classes.buttonRow}>
            <Button variant="outlined" onClick={() => handleNextButton()}>
              {guessing ? "See Result" : "Next Scale"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScaleNotes;
