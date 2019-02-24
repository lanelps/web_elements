import React, { Component } from 'react'

export default class App extends Component {
  getInitialState() {
    return { num: this.getRandomNumber() }
  }

  getRandomNumber() {
    return Math.ceil(Math.random() * 6)
  }

  render() {
    return (
      <div>
        Your dice roll:
        {this.state.num}
      </div>
    )
  }
}
