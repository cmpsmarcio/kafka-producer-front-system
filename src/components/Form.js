import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      idDrone: 0,
      latitude: 0,
      longitude: 0,
      temperature: 20,
      humidity: 0,
      rastreability: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChanged = this.handleChanged.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name 

    this.setState({
      [name]: value
    })
  }

  handleChanged(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Um Id foi enviado: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Drone Id:&nbsp;</label>
        <input name="idDrone" type="text" value={this.state.value} onChange={this.handleChanged} />
        <label>Latitude:&nbsp;</label>
        <input name="latitude" type="text" value={this.state.value} onChange={this.handleChanged} />
        <label>Longitude:&nbsp;</label>
        <input name="longitude" type="text" value={this.state.value} onChange={this.handleChanged} />

        <input type="submit" value="Enviar" />
      </form>
    )
  }
}