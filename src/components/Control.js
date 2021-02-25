import React, { Component } from 'react'

export default class Control extends Component {
  constructor(props) {
    super(props)
    this.state = {
     ...props
    }
  }
 
  handleClick(val) {
    let { value, min, max } = this.state
    value += val
    if (value >= min && value <= max) {
      this.setState({
        value: value
      })
    }
  }
 
  render() {
    return (
      <div className="app-container">
        <div className="temperature-display-container">
          <div className="temperature-display">{this.state.value}{this.state.legend}</div>
        </div>
        <div className="button-container">
          <button name="maishum" onClick={() => this.handleClick(+this.state.step)}>+</button>
          <button name="menoshum" onClick={() => this.handleClick(-this.state.step)}>-</button>
        </div>
      </div>
    );
  }
}