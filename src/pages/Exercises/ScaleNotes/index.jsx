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
  const classes = useStyles();
  const [note, setNote] = useState(getRandom(pitchList));
  const [result, setResult] = useState();
  const [checkedPitches, setCheckedPitches] = useState(pitchList);
  const { t } = useTranslation();

  /**
   * Handles the next button onClick event.
   */
  function handleNextButton() {
    if (result) {
      let newNote = getRandom(checkedPitches);

      while (newNote === note) {
        newNote = getRandom(checkedPitches);
      }

      setNote(newNote);
      setResult();
    } else {
      const scale = pitches[note].diatonic.naturalMajor.map((pitch) => (
        <Typography key={pitch} display="inline" style={{ marginRight: 15 }}>
          {pitches[pitch].label}
        </Typography>
      ));
      setResult(scale);
    }
  }

  /**
   * Handles the checkbox event.
   */
  function handleCheckBox(newState, pitch) {
    if (newState) {
      setCheckedPitches((oldPitches) => [...oldPitches, pitch]);
    } else {
      setCheckedPitches((oldPitches) => oldPitches.filter((e) => e !== pitch));
    }
  }

  return (
    <div {...props}>
      <div className={classes.section}>
        <Typography color="text.secondary">
          {t("exercises.scaleNotes.scalesTitle")}
        </Typography>
        <FormGroup className={classes.checkItems}>
          {pitchList.map((pitch) => (
            <FormControlLabel
              key={pitch}
              control={
                <Checkbox
                  defaultChecked
                  onChange={(e, newState) => handleCheckBox(newState, pitch)}
                />
              }
              label={pitchLabels[pitch]}
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
              style={{ marginRight: 20 }}
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
            >
              {pitchLabels[note]}
            </Typography>
            <Typography
              style={{ marginLeft: 20 }}
              display="inline"
              color="text.secondary"
              className={classes.frontText}
            >
              {t("exercises.scaleNotes.scales.major")}
            </Typography>
          </div>
          <div className={classes.backCard}>
            <NoteField />
          </div>
          <div className={classes.buttonRow}>
            <Button variant="outlined" onClick={() => handleNextButton()}>
              {result ? "Next Scale" : "Show result"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScaleNotes;
