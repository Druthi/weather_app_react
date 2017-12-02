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
      this.setState({
        fWeather: (response.body.main.temp *9/5) - 273.15,
        cWeather: response.body.main.temp - 273.15,
        currentWeather: (response.body.main.temp *9/5) - 273.15,
        celcius: false
      });
    });
  }

  showWeather = () => {
    if(this.state.celcius == false){
      this.setState({ ...this.state,
        celcius:true,
        currentWeather: this.state.cWeather
      });
    }
    else {
      this.setState({ ...this.state,
        celcius:false,
        currentWeather: this.state.fWeather
      });
    }
  }
  

  render() {
    return (
      <div className="App">
        <header>Weather App</header> 
        <p onClick={this.showWeather}>{this.state.currentWeather}</p>
              
      </div>
    );
  }
}

export default App;
