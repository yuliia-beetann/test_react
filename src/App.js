import React, { Component } from 'react';
import Person from './components/Person';

class App extends Component {

  state = {
      name: 'Yuliia',
      age: 23
  }

  ShowAlert = (name, age) => {
    alert(`Name: ${name}. Age: ${age}`)
  }

  GetYearOlder = () => {
    this.setState({
      age: this.state.age + 1
    })
  }

  GetYearYounger = () => {
    this.setState({
      age: this.state.age - 1
    })
  }

  render() {
    let {name, age} = this.state
    return (
        <Person name={name} age={age} showAlert={this.ShowAlert} getYearOlder={this.GetYearOlder} getYearYounger={this.GetYearYounger} />
    )
  }
}

export default App;