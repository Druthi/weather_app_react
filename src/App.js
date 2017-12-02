import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state={}
  }

  componentWillMount() {
    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=cf1d3f8e4f9d884c4db508e806a67b17&q=Bangalore";
    Request.get(url).then((response) => {
      debugger;
      this.setState({
        currentWeather: response.body.main.temp       
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>Weather App</header> 
        <p>{this.state.currentWeather}</p>
              
      </div>
    );
  }
}

export default App;
