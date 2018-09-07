import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TEMP_FORM from "./components/TEMP_FORM";
import Convertion_CtoF from "./components/Convertion_CtoF";

class App extends Component {
  state = {
    temp: 0
  };

  getValue = value => {
    this.setState({
      temp: value
    });
  };

  render() {
    return (
      <div className="App">
        <TEMP_FORM getValue={this.getValue} />
        <Convertion_CtoF temperature={this.state.temp} />
      </div>
    );
  }
}

export default App;
