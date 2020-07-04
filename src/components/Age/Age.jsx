import React, { Component } from "react";

export default class Name extends Component {
  render() {
    let { age } = this.props
    return (
      <div>{age}</div>
    )
  }
}