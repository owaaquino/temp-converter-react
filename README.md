# Another Temperature Converter

**Goal:**

- Understand how to pass state and props

**Features:**

- Converts the Fahrenheit to Celsius (or vice versa)

**Techs:**

- React.js
- CSS
- HTML

**Live links:**

- Codepen - not yet
- Hosted with Netlify - [https://quirky-brown-da843b.netlify.com/](https://quirky-brown-da843b.netlify.com/)

# Notes

Prerequisites:

- Must install Nodejs on your unit
- Must install NPM on your unit
- Install create-react-app installed to your node module ( check out [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app) for how to install the framework)
- Have a basic understanding of Javascript (ES6)
- Have a basic knowledge about React.js framework

## 1. Creating states

Let's create are states to our App.js file.
```javascript
    import React, { Component } from "react";
    import "./App.css";

    class App extends Component {
    	// let's set the default value of our state to 0
      state = {
        fahrenheit: 0,
        celsius: 0
      };

      render() {
        return (
          <div className="App">
    				// our components will be added here
          </div>
        );
      }
    }

    export default App;
```
## 2. Create a component for Fahrenheit and Celsius fields

Create a FahrenheitCard.js and CelsiusCard.js components with input element.
```javascript
    import React from "react";

    class FahrenheitCard extends React.Component {

      render() {
        return (
          <div>
            <h1>Fahrenheit</h1>
            <input
              type="number"
            />
          </div>
        );
      }
    }

    export default FahrenheitCard;
```
```javascript
    import React from "react";

    class CelsiusCard extends React.Component {

      render() {
        return (
          <div>
            <h1>Celsius</h1>
            <input
              type="number"
            />
          </div>
        );
      }
    }

    export default CelsiusCard;
```
I create a separate component for fahrenheit and celsius for this project, because that's the first solution I can think of.  There are so many other way to do this, but because I wanted to play with the passing of states / props I choose this method.

## 3. Add/Call the component to our App.js
```javascript
    import React, { Component } from "react";
    import logo from "./logo.svg";
    import "./App.css";
    import FahrenheitCard from "./components/FahrenheitCard";
    import CelsiusCard from "./components/CelsiusCard";

    class App extends Component {
      state = {
        fahrenheit: 0,
        celsius: 0
      };

      render() {
        return (
          <div className="App">
    				// we added our created components to the App.js main render function
    				// then pass on the state as props so our components can display the converted value
            <CelsiusCard
              celsius={this.state.celsius}
            />
            <FahrenheitCard
              fahrenheit={this.state.fahrenheit}
            />
          </div>
        );
      }
    }

    export default App;
```
## 4. Back in our two components, we should create a conversion function.
```javascript
    class FahrenheitCard extends React.Component {

    	// we needed to get the current input box value and create a refrence
    	// for React be able to read it
      tempToConvertRef = React.createRef();

    	// this function will convert our current fahrenheit value to celsius
    	// then pass its new value to our getNewTempValue function that will update
    	// our existing state
      onChangeHandler = e => {
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
```
```javascript
    class CelsiusCard extends React.Component {

    	tempToConvertRef = React.createRef();

    	onChangeHandler = e => {
        let newCelsius = this.tempToConvertRef.current.value;
        let newFahrenheit;
        newFahrenheit = (newCelsius * 9) / 5 + 32;
        const rounded = Math.round(newFahrenheit * 1000) / 1000;
        this.props.getNewTempValue(newCelsius, rounded);
    	};

      render() {
        return (
          <div>
            <h1>Celsius</h1>
            <input
              type="number"
              onChange={this.onChangeHandler}
              value={this.props.celsius}
              ref={this.tempToConvertRef}
            />
          </div>
        );
      }
    }
```
## 5. Create a function getNewTempValue to our App.js
```javascript
    import React, { Component } from "react";
    import logo from "./logo.svg";
    import "./App.css";
    import FahrenheitCard from "./components/FahrenheitCard";
    import CelsiusCard from "./components/CelsiusCard";

    class App extends Component {
      state = {
        fahrenheit: 0,
        celsius: 0
      };

    	// our function just update the state existing value using the .setState method
      getNewTempValue = (newCelsius, newFahrenheit) => {
        this.setState({
          fahrenheit: newFahrenheit,
          celsius: newCelsius
        });
      };

      render() {
        return (
          <div className="App">
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
    ```
