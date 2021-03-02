import React, { Component } from 'react'
import { uuid } from 'uuidv4'
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
      drones.push(<div className="p-2"><Form 
        idDrone={uuid()} 
        latitude={-23.54982304015043}
        longitude={-46.634168716398555}
        temperature={25}
        humidity={80}
        rastreability={false} />
        </div>)
    }
    return (
      <div>
        <div> 
          <button className="left-2 top-2 fixed mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg" onClick={this.handleClick}>Novo drone</button>
        </div>
        <div className="flex flex-rowrap">{drones}</div>
      </div>
    )
  }
}