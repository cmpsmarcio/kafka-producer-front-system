import React, { Component } from "react";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idDrone: 0,
      latitude: 0,
      longitude: 0,
      temperature: 20,
      humidity: 0,
      rastreability: false,
    };

    //this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChanged = this.handleChanged.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this)
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
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={this.handleSubmit}
      >
        <h1 className="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
          Gerenciador de Drone
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="drone"
          >
            Código do Drone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="drone"
            id="idDrone"
            type="text"
            placeholder="Insira o código do drone"
            onChange={this.handleChanged}
            required
          />
        </div>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Temperatura
        </label>
        <input
          className="w-full"
          type="range"
          x-model="charsLength"
          min="-25"
          max="40"
          step="5"
          onChange={this.handleChanged}
        />
        <input
          id="temperature"
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder="Length"
          type="number"
          min="-25"
          max="40"
          step="5"
          x-model="charsLength"
          onChange={this.handleChanged}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Umidade do Ar
        </label>
        <input
          className="w-full"
          type="range"
          x-model="charsLength"
          min="0"
          max="100"
          step="5"
          onChange={this.handleChanged}
        />
        <input
          id="humidity"
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder="Length"
          type="number"
          min="0"
          max="100"
          step="5"
          x-model="charsLength"
          onChange={this.handleChanged}
        />
        <label
          htmlFor="toggle"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Rastreamento
        </label>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="latitude"
          >
            Latitude
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="latitude"
            id="latitude"
            type="text"
            placeholder="Insira a latitude"
            onChange={this.handleChanged}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="longitude"
          >
            Longitude
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="longitude"
            id="longitude"
            type="text"
            placeholder="Insira a longitude"
            onChange={this.handleChanged}
            required
          />
        </div>

        {/* 
        <label>Drone Id:&nbsp;</label>
        <input
          name="idDrone"
          type="text"
          value={this.state.value}
          onChange={this.handleChanged}
        />
        <label>Latitude:&nbsp;</label>
        <input
          name="latitude"
          type="text"
          value={this.state.value}
          onChange={this.handleChanged}
        />
        <label>Longitude:&nbsp;</label>
        <input
          name="longitude"
          type="text"
          value={this.state.value}
          onChange={this.handleChanged}
        />
        <div class="flex-auto flex space-x-3">
          <button
            class="w-1/2 flex items-center justify-center rounded-md bg-black text-white"
            type="submit"
          >
            Enviar
          </button>
        </div>
        */}
      </form>
    );
  }
}
