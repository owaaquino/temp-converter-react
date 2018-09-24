import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import TEMP_FORM from "./components/TEMP_FORM";
// import Convertion_CtoF from "./components/Convertion_CtoF";
import FahrenheitCard from "./components/FahrenheitCard";
import CelsiusCard from "./components/CelsiusCard";

class App extends Component {
  state = {
    fahrenheit: 0,
    celsius: 0
  };

  // getValue = value => {
  //   this.setState({
  //     temp: value
  //   });
  // };

  getNewTempValue = (newCelsius, newFahrenheit) => {
    this.setState({
      fahrenheit: newFahrenheit,
      celsius: newCelsius
    });
  };

  // getCelsius = value => {
  //   this.setState({
  //     celsius: value
  //   });
  // };

  render() {
    return (
      <div className="App">
        {/* <TEMP_FORM getValue={this.getValue} />
        <Convertion_CtoF temperature={this.state.temp} /> */}
        <CelsiusCard
          celsius={this.state.celsius}
          getNewTempValue={this.getNewTempValue}
        />
        <FahrenheitCard
          fahrenheit={this.state.fahrenheit}
          getNewTempValue={this.getNewTempValue}
        />
      </div>
    );
  }
}

export default App;
