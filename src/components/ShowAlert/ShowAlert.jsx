import React, { Component } from "react";

export default class Name extends Component {
  render() {
    let { name, age, showAlert } = this.props
    return (
        <button onClick={() => showAlert(name, age)}>Show info</button>
    )
  }
}