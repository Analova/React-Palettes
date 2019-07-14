import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./Footer";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorFilterBy) {
    //return all shades of give color
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorFilterBy)
      );
    }
    return shades.slice(1);
  }
  changeFormat(val) {
    // alert(value);
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map(c => (
      <ColorBox
        key={c.id}
        name={c.name}
        background={c[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <NavBar handleChange={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default SingleColorPalette;
