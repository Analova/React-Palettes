import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
import "rc-slider/assets/index.css";
import Slider, { Range } from "rc-slider";
import "./NavBar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="NavBar">
        <div className="logo">
          <a href="#">ColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level:{level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX-#ffffff</MenuItem>
            <MenuItem value="rgb">RGB-regb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA-regb(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
