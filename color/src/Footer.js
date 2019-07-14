import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles/PaletteFooter";

function Footer(props) {
  const { emoji, paletteName, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}
export default withStyles(styles)(Footer);
