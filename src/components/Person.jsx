import React, { Component } from "react";
import Me from './Me/Me'

export default class Person extends Component {
  render() {
      let { age, name, showAlert, getYearOlder, getYearYounger } = this.props
    return (
        <Me age={age} name={name} showAlert={showAlert} getYearOlder={getYearOlder} getYearYounger={getYearYounger} />
    )
  }
}