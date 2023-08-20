import React, { Component } from "react";
import "./App.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      currentValue: null,
      operator: null,
      waitingForOperand: false,
    };
  }

  handleDigitClick = (digit) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit,
      });
    }
  };

  handleOperatorClick = (operator) => {
    const { displayValue } = this.state;
    const currentValue = parseFloat(displayValue);

    this.setState({
      currentValue,
      displayValue: "0",
      waitingForOperand: true,
      operator,
    });
  };

  handleEqualClick = () => {
    const { currentValue, displayValue, operator } = this.state;
    const newValue = parseFloat(displayValue);

    if (currentValue !== null && operator) {
      const result = this.calculate(currentValue, newValue, operator);

      this.setState({
        displayValue: String(result),
        currentValue: result,
        waitingForOperand: true,
        operator: null,
      });
    }
  };
  handleClearClick = () => {
    this.setState({
      displayValue: "0",
      currentValue: null,
      operator: null,
      waitingForOperand: false,
    });
  };

  calculate = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return b;
    }
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="container">
        <div className="calculator">
          <div className="display">{displayValue}</div>
          <div className="buttons">
            <div className="row">
              <button onClick={() => this.handleDigitClick(7)}>7</button>
              <button onClick={() => this.handleDigitClick(8)}>8</button>
              <button onClick={() => this.handleDigitClick(9)}>9</button>
              <button
                className="operator-button"
                onClick={() => this.handleOperatorClick("/")}
              >
                /
              </button>
            </div>
            <div className="row">
              <button onClick={() => this.handleDigitClick(4)}>4</button>
              <button onClick={() => this.handleDigitClick(5)}>5</button>
              <button onClick={() => this.handleDigitClick(6)}>6</button>
              <button
                className="operator-button"
                onClick={() => this.handleOperatorClick("*")}
              >
                *
              </button>
            </div>
            <div className="row">
              <button onClick={() => this.handleDigitClick(1)}>1</button>
              <button onClick={() => this.handleDigitClick(2)}>2</button>
              <button onClick={() => this.handleDigitClick(3)}>3</button>
              <button
                className="operator-button"
                onClick={() => this.handleOperatorClick("-")}
              >
                -
              </button>
            </div>
            <div className="row">
              <button onClick={() => this.handleDigitClick(0)}>0</button>
              <button className="clear-button" onClick={this.handleClearClick}>
                C
              </button>
              <button className="equal-button" onClick={this.handleEqualClick}>
                =
              </button>
              <button
                className="operator-button"
                onClick={() => this.handleOperatorClick("+")}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
