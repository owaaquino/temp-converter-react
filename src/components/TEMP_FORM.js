import React from "react";

class TEMP_FORM extends React.Component {
  tempToConvertRef = React.createRef();

  clickHandler = e => {
    e.preventDefault();
    let celsius = this.tempToConvertRef.current.value;
    console.log(celsius);
    let fahrenheit;
    fahrenheit = (celsius * 9) / 5 + 32;

    this.props.getValue(fahrenheit);
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
          <button onClick={this.clickHandler}>Convert</button>
        </form>
      </div>
    );
  }
}

export default TEMP_FORM;
