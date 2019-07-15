import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider, { Range } from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import styles from "./styles/NavbarStyles";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar(e) {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showSlider, classes } = this.props;
    const { format, open } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/"> ColorPicker</Link>
        </div>
        {showSlider && (
          <div className="slider-container">
            <span>Level:{level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX-#ffffff</MenuItem>
            <MenuItem value="rgb">RGB-regb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA-regb(255,255,255,1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={6000}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Format Changed to {format}</span>}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              key="close"
              aria-lable="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(NavBar);
