import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/${colorName}`} style={{ color: colorName }}>{colorName}</Link>
    </li>
  ));
  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1 className="ColorList-title">Welcome to the Color Factory App  <i class="tint icon"></i></h1>
        <div>
            <i className="icon-left massive cogs icon"/>
            <i className="icon-right massive cog icon"/>
        </div>
        <div className="ui big text loader">
        
        </div>

        <h1 className="Color-add">
          <Link to="/new">Add a color</Link>
        </h1>
      </header>
      <div className="ColorList-intro">
        <p>Please select a color below:</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

export default ColorList;