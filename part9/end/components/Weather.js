import React, {Component} from "react";
import Large from "./Weather/Large";
import Small from "./Weather/Small";
import {getWeatherData} from "../utils/weatherAPI";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: {
        name: "..."
      },
      list: []
    };

    getWeatherData().then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div>
        <h1>Weather for {this.state.city.name}</h1>

        <Large {...this.state.list[0]} />

        <br/>

        <div className="row-3">
          {this.state.list.slice(1,4).map(weatherData => {
            return (
              <Small {...weatherData} />
            );
          })}
        </div>
        <div className="row-3">
          {this.state.list.slice(4, 7).map(weatherData => {
            return (
              <Small {...weatherData} />
            );
          })}
        </div>
      </div>
    )
  }
}