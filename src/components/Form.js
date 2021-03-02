import React, { Component } from "react";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idDrone: props.idDrone || 0,
      latitude: props.latitude || -23.54982304015043,
      longitude: props.longitude ||  -46.634168716398555,
      temperature: props.temperature || 20,
      humidity: props.humidity || 60,
      rastreability: false,
    };

    this.handleChanged = this.handleChanged.bind(this);
  }

  keyCancel(event) {
    event.preventDefault()  
  }

  handleChanged(event) {
    this.setState({
      ...this.state,
      [event.target.id]: event.target.value,
    });
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      console.log(this.state);
    }, 10000);
  }

  render() {
    return (
      <div className="flex flex-rowrap bg-gray-100 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-2">
            Drone
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="drone">
              Código do Drone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="drone"
              id="idDrone"
              type="text"
              placeholder="Insira o código do drone"
              onChange={this.handleChanged}
              value={this.props.idDrone}
              required />
          </div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Temperatura Cº
          </label>
          <input
            id="temperature"
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Temperatura em Cº"
            type="number"
            min="-25"
            max="40"
            step="1"
            x-model="charsLength"
            onChange={this.handleChanged}
            onKeyDown={this.keyCancel}
            value={this.state.temperature} />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Umidade do Ar %
          </label>
          <input
            id="humidity"
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Humidade do ar em %"
            type="number"
            min="0"
            max="100"
            step="5"
            x-model="charsLength"
            onChange={this.handleChanged}
            onKeyDown={this.keyCancel}
            value={this.state.humidity} />
          <label
            htmlFor="toggle"
            className="block text-gray-700 text-sm font-bold mb-2" >
            Rastreamento
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" >
            </label>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="latitude" >
              Latitude
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="latitude"
              id="latitude"
              type="text"
              placeholder="Insira a latitude"
              onChange={this.handleChanged}
              value={this.state.latitude}
              required />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="longitude" >
              Longitude
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="longitude"
              id="longitude"
              type="text"
              placeholder="Insira a longitude"
              onChange={this.handleChanged}
              value={this.state.longitude}
              required />
          </div>
        </div>
      </div>
    );
  }
}
