import React from "react";
import "./Color.css";
import { Link } from "react-router-dom";

const Color = props => {
  const { color: colorName } = props.match.params;
  const { color } = props;
  return (
    <div className="Color" style={{ backgroundColor: color }}>
      <p>this is {colorName}.</p>
      <p>What a color</p>
      <p>
        <Link to="/">
          <i class="arrow alternate circle left outline icon"></i>go back
        </Link>
      </p>
    </div>
  );
};

export default Color;

