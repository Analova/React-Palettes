import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { palettes } = this.props;
    return (
      <div>
        React Colors
        {palettes.map(palette => (
          <p>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}
