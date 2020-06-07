import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ColorList from "./components/colorList/ColorList";
import NewColor from "./components/newColor/NewColor";
import Color from "./components/color/Color";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: { black: "#111", red: "#FF0000", green: "#00FF01", blue: "#0000FF", grey: "#c2c2c2" }
    };
    this.handleAdd = this.handleAdd.props;
  }

  handleAdd(newColor) {
    this.setState(prevState => ({
      colors: { ...newColor, ...prevState.colors }
    }));
  }

  render() {
    const ColorListWithColors = () => <ColorList colors={this.state.colors} />;

    const NewColorWithHandler = props => (
      <NewColor addColor={this.handleAdd} {...props} />
      
    );

    const Spinner = (props) => {
      return (
          <div className="ui active dimmer">
          <div className="ui big text loader">
          {props.message}
          <Spinner />
          </div></div>
          
      );
  };

    const ColorWithColor = props => {
      const colorName = props.match.params.color;
      const color = this.state.colors[colorName];
      return color ? (
        <Color {...props} color={color} />
      ) : (
        <Redirect to="/" />
      );
    };

    return (
      <Switch>
        <Route exact path="/" render={ColorListWithColors} />
        <Route path="/new" render={NewColorWithHandler} />
        <Route path="/:color" render={ColorWithColor} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;