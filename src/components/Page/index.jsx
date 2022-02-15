import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import useStyles from "./styles";

/**
 * A page wrapper.
 */
function Page({ children }) {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>{children}</div>
      <a
        className={classes.footer}
        href="https://github.com/matheustdo"
        target="_blank"
        rel="noreferrer"
      >
        <Typography align="right">{t("footer.credits")}</Typography>
      </a>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.shape(),
  ]).isRequired,
};

export default Page;
