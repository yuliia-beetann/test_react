import React, { Component } from "react";

export default class Name extends Component {
  render() {
    let { age, getYearYounger } = this.props
    return (
      <button onClick={() => getYearYounger(age)}>Make younger</button>
    )
  }
}