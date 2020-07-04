import React, { Component } from "react";
import Name from '../Name/Name'
import Age from '../Age/Age'
import ShowAlert from '../ShowAlert/ShowAlert'
import GetYearOlder from '../GetYearOlder/GetYearOlder'
import GetYearYounger from '../GetYearYounger/GetYearYounger'
import './Me.css';

export default class Me extends Component {
  render() {
    let { name, age, showAlert, getYearOlder, getYearYounger } = this.props
    return (
      <div className="content">
        <Name name={name} />
        <Age age={age} />
        <ShowAlert name={name} age={age} showAlert={showAlert} />
        <GetYearOlder age={age} getYearOlder={getYearOlder} />
        <GetYearYounger age={age} getYearYounger={getYearYounger} />
      </div>
    )
  }
}