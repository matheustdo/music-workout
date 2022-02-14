import Page from "../../components/Page";
import ScaleNotes from "../Exercises/ScaleNotes";
import useStyles from "./styles";

/**
 * The application's home page.
 */
function Home() {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();

  return (
    <Page>
      <ScaleNotes />
    </Page>
  );
}

export default Home;
