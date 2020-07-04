import React, { Component } from "react";

export default class Name extends Component {
  render() {
    let { name } = this.props
    return (
        <div>{name}</div>
    )
  }
}