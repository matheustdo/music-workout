import { Breadcrumbs, Button, Typography } from "@mui/material";
import { useState } from "react";

import { pitches, pitchList } from "../../constants/definitions";
import useStyles from "./styles";

/**
 * Randomizes a note from pitch list.
 * @returns A random note from pitch list
 */
function randomNote() {
  return pitchList[Math.floor(Math.random() * pitchList.length)];
}

/**
 * This pages does the major scale training.
 */
function ScalesTrainer() {
  const classes = useStyles();
  const [note, setNote] = useState(randomNote());
  const [result, setResult] = useState();

  /**
   * Handles the next button onClick event.
   */
  function handleNextButton() {
    if (result) {
      let newNote = randomNote();

      while (newNote === note) {
        newNote = randomNote();
      }

      setNote(newNote);
      setResult();
    } else {
      const scale = pitches[note].diatonic.naturalMajor.map((item) => (
        <Typography key={item} display="inline" style={{ marginRight: 15 }}>
          {pitches[item].label}
        </Typography>
      ));
      setResult(scale);
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
          <div className={classes.guessSection}>
            <Typography style={{ marginBottom: 20 }}>
              Guess the Natural Scale of:
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
