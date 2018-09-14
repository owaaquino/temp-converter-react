import React from "react";

class FahrenheitCard extends React.Component {
  tempToConvertRef = React.createRef();
  onChangeHandler = e => {
    // let newCelsius = this.tempToConvertRef.current.value;
    // let newFahrenheit;
    // newFahrenheit = (newCelsius * 9) / 5 + 32;
    // this.props.getFahrenheit(newFahrenheit);

    let newFahrenheit = this.tempToConvertRef.current.value;
    let newCelsius;
    newCelsius = ((newFahrenheit - 32) * 5) / 9;
    const rounded = Math.round(newCelsius * 1000) / 1000;
    this.props.getNewTempValue(rounded, newFahrenheit);
  };

  render() {
    return (
      <div>
        <h1>Fahrenheit</h1>
        <input
          type="number"
          onChange={this.onChangeHandler}
          value={this.props.fahrenheit}
          ref={this.tempToConvertRef}
        />
      </div>
    );
  }
}

export default FahrenheitCard;
