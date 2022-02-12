import {
  Breadcrumbs,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { pitches, pitchList } from "../../constants/definitions";
import useStyles from "./styles";

/**
 * Randomizes a note from pitch list.
 * @returns A random note from pitch list
 */
function randomNote(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/**
 * This pages does the major scale training.
 */
function ScalesTrainer() {
  const classes = useStyles();
  const [note, setNote] = useState(randomNote(pitchList));
  const [result, setResult] = useState();
  const [checkedPitches, setCheckedPitches] = useState(pitchList);

  /**
   * Handles the next button onClick event.
   */
  function handleNextButton() {
    if (result) {
      let newNote = randomNote(checkedPitches);

      while (newNote === note) {
        newNote = randomNote(checkedPitches);
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
    <div className={classes.container}>
      <div className={classes.header} />
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <Breadcrumbs>
            <Typography>Musical Workout</Typography>
            <Typography>Diatonic Scales</Typography>
            <Typography color="text.primary">Natural Major</Typography>
          </Breadcrumbs>
          <div className={classes.checkSection}>
            <Typography>Select training scales:</Typography>
            <FormGroup className={classes.checkItems}>
              {pitchList.map((pitch) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      onChange={(e, newState) =>
                        handleCheckBox(newState, pitch)
                      }
                    />
                  }
                  label={pitches[pitch].label}
                  className={classes.checkItem}
                  disableTypography
                />
              ))}
            </FormGroup>
          </div>
          <div className={classes.guessSection}>
            <Typography style={{ marginBottom: 20 }}>
              Guess the natural scale of:
            </Typography>
            <Typography variant="h3" display="inline" color="primary">
              {pitches[note].label}
            </Typography>
            <Typography
              style={{ marginLeft: 10 }}
              variant="h5"
              display="inline"
              color="primary"
            >
              major
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              {result || `__ __ __ __ __ __ __`}
            </Typography>
          </div>
          <Button variant="outlined" onClick={() => handleNextButton()}>
            {result ? "Next Scale" : "Show result"}
          </Button>
        </div>
        <Typography style={{ marginTop: 10 }}>
          Developed by Matheus Teles
        </Typography>
      </div>
    </div>
  );
}

export default ScalesTrainer;
