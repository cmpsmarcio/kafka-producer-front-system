import React, { Component } from 'react'
import uuid from 'react-native-uuid'
import Form from './Form.js'

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      drones: 0
    } 

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      drones: this.state.drones + 1
    })
  }

  render() {
    let drones = []
    for(let i=0; i < this.state.drones; i++) {
      drones.push(
      <Form 
        idDrone={uuid.v4()} 
        latitude={-23.54982304015043}
        longitude={-46.634168716398555}
        temperature={23}
        humidity={60}
        rastreability={false} 
      />)
    }
    return (
      <div>
        <div>
          <button className="left-2 top-2 fixed mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg" onClick={this.handleClick}>Novo drone</button>
        </div>
        <div className="flex flex-rowrap space-x-2">
          {drones}
        </div>
      </div>
    )
  }
}