import React from "react";

class TEMP_FORM extends React.Component {
  tempToConvertRef = React.createRef();

  convertToFahrenheit = e => {
    e.preventDefault();
    let celsius = this.tempToConvertRef.current.value;
    let fahrenheit;
    fahrenheit = (celsius * 9) / 5 + 32;
    this.props.getValue(fahrenheit);
  };

  convertToCelsius = e => {
    let fahrenheit = this.tempToConvertRef.current.value;
    let celsius;
    celsius = ((fahrenheit - 32) * 5) / 9;
    this.props.getValue(celsius);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="number"
            name="tempToConvert"
            ref={this.tempToConvertRef}
            required
          />
          <button onClick={this.convertToFahrenheit}>Convert</button>
        </form>
      </div>
    );
  }
}

export default TEMP_FORM;
