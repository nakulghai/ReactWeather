import React from 'react';
import WeatherForm from './WeatherForm.jsx';
import openweathermap from'../API/openweathermap.jsx'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Miami',
      temp: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (val) {
    var that = this;
    openweathermap.getTemp(val).then(function (temp) {
        that.setState({
          location: val,
          temp: temp,
        });
      }, function (errorMessage) {
        alert(errorMessage);
      });
}
   render() {
      return (
         <div>
            <WeatherForm onSubmit={this.handleSubmit}/>
            {`${this.state.location} temperature is ${this.state.temp}`}
         </div>
      );
   }
}

export default Weather;
