import Page from "../../components/Page";
import ScaleNotes from "../Exercises/ScaleNotes";
import useStyles from "./styles";

/**
 * The application's home page.
 */
function Home() {
  const classes = useStyles();

  return (
    <Page>
      <ScaleNotes className={classes.scaleNotes} />
    </Page>
  );
}

export default Home;
