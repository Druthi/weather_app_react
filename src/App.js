import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state={
      city: "Bangalore"
    }
  }

  componentWillMount() {
    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=cf1d3f8e4f9d884c4db508e806a67b17&q="+ this.state.city;
    Request.get(url).then((response) => {
      this.setState({
        fWeather: (response.body.main.temp *9/5) - 459.67,
        cWeather: response.body.main.temp - 273.15,
        currentWeather: (response.body.main.temp *9/5) - 459.67,
        celcius: false,
        status: response.body.weather[0].description,
        city: this.state.city
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

  onChange = (e) => {
    this.setState({
      ...this.state,
      inputValue: e.target.value      
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state,
      city: this.state.inputValue,
      inputValue: ""
    });
    this.apiRequest();    
  }

  apiRequest = () => {
    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=cf1d3f8e4f9d884c4db508e806a67b17&q="+ this.state.city;
    Request.get(url).then((response) => {
      this.setState({
        fWeather: (response.body.main.temp *9/5) - 459.67,
        cWeather: response.body.main.temp - 273.15,
        currentWeather: (response.body.main.temp *9/5) - 459.67,
        celcius: false,
        status: response.body.weather[0].description,
        city: this.state.city
      });
    });
  }
  

  render() {
    return (
      <div className="App">
        <header>Weather App</header> 
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.inputValue} placeholder="Enter city" onChange={this.onChange}></input>
          <button type="submit" >Submit</button>
        </form>
        <p onClick={this.showWeather}>{this.state.currentWeather} </p>
        <p>{this.state.status}</p>
        <p>{this.state.city}</p>
        
              
      </div>
    );
  }
}

export default App;
