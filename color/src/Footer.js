import React from "react";

function Footer(props) {
  const { emoji, paletteName } = props;
  return (
    <footer className="footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}
export default Footer;
