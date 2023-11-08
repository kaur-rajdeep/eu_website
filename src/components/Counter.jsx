import React, { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0,
    };

    this.startCounter(); // Call startCounter in the constructor
  }

  componentDidMount() {
    this.startCounter(); // No need to call startCounter here
  }

  componentWillUnmount() {
    this.stopCounter();
  }

  startCounter() {
    this.counterInterval = setInterval(() => {
      const { currentValue } = this.state;
      const { toValue } = this.props;

      if (currentValue < toValue) {
        this.setState({ currentValue: currentValue + 1 });
      } else {
        this.stopCounter();
      }
    }, 50);
  }

  stopCounter() {
    clearInterval(this.counterInterval);
  }

  render() {
    const { currentValue } = this.state;
    const { color, separator } = this.props;

    return (
      <div
        className="font-extrabold text-5xl p-14 ml-0 text-center"
        style={{ color }}
      >
        {separator ? currentValue.toLocaleString() : currentValue}+
      </div>
    );
  }
}

export default CounterComponent;
