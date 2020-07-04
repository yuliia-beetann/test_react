import React, { Component } from "react";

export default class Name extends Component {
  render() {
    let { age, getYearOlder } = this.props
    return (
      <button onClick={() => getYearOlder(age)}>Make older</button>
    )
  }
}