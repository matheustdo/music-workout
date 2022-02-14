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
      <Typography className={classes.footer} align="right">
        {t("footer.credits")}
      </Typography>
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
