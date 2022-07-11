import './App.css';
import React from 'react';
import Current from '../Current/current';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      current_weather : {},
      isLoaded: false,
      error: null

      
    }
  }

  componentDidMount(){
    fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          data : result,
          current_weather : result.current_weather
        });
        console.log(result);
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  render(){
    return(
      <>
        <div className='container'>
          {/* <div className='row'>

          </div> */}
          <Current 
            temperature = {this.state.current_weather.temperature}
            weatherCode = {this.state.current_weather.weathercode}
            windDirection = {this.state.current_weather.winddirection}
            dateTime = {this.state.current_weather.time}

          />

          {/* <Card
          longitude = {this.state.cards.longitude}
          time = {this.state.current_weather.time}
          /> */}
        </div>
      <div className='layover'>

      </div>
      </>
    )
  }
}

export default App;
