import './App.css';
import React from 'react';
import Current from '../Current/current';
import cities from '../assets/cities.json'
import getForecast from '../ajax/getForecast';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      current_weather : {},
      isLoaded: false,
      error: null,
      selectedCity : {}
    }
  }



  componentDidMount(){
    const defaultCity = {
      id: 0,
      name: 'Bergamo',
      latitude: 45.69, 
      longitude:9.67
    }
    this.setState({selectedCity : defaultCity});
    getForecast(defaultCity)
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
    )
  }

  onCityChanged = (cityObj) => {
    this.setState({selectedCity : cityObj});
    getForecast(cityObj)
    .then(
      (result) => {
        this.setState({
          data : result,
          current_weather : result.current_weather
        });
        //console.log(result);
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

  }

  
    
  

  // handleDelete = cityId =>{
  //   const cities = this.cities.filter(city => city.id !== cityId)
  //   this.setState({cities});
  // }

  render(){
    console.log();
    return(
      <>
        <div className='container'>
          {/* <div className='row'>

          </div> */}
          <Current 
            temperature = {this.state.current_weather.temperature}
            weatherCode = {this.state.current_weather.weathercode}
            windDirection = {this.state.current_weather.winddirection}
            windSpeed = {this.state.current_weather.windspeed}
            dateTime = {this.state.current_weather.time}
            elevation = {this.state.data.elevation}
            sendCurrentCity = {this.onCityChanged}

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
