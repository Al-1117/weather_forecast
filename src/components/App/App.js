import './App.css';
import React from 'react';
import Current from '../Current/current';
import cities from '../assets/cities.json'
import getForecast from '../ajax/getForecast';
import Daily from '../Daily/daily';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      current_weather : {},
      isLoaded: false,
      error: null,
      selectedCity : {},
      daily_weather : {},
      temperatureMax : 0,
      temperatureMin : 0,
      dailyDateTime : '',      


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
          current_weather : result.current_weather,
          daily_weather : result.daily,
          temperatureMax : result.daily.temperature_2m_max,
          temperatureMin : result.daily.temperature_2m_min,
          dailyDateTime : result.daily.time,
        });
        //console.log(result);
        //console.log(this.state.daily_weather);

      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )

  }

   test = (index)=>{
    return <Daily
      temperatureMax = {this.state.temperatureMax[index]}
      temperatureMin = {this.state.temperatureMin[index]}
      dailyDateTime = {this.state.dailyDateTime[index]}
   />
  }
 
  onCityChanged = (cityObj) => {
    this.setState({selectedCity : cityObj});
    getForecast(cityObj)
    .then(
      (result) => {
        this.setState({
          data : result,
          current_weather : result.current_weather,
          daily_weather : result.daily,
          temperatureMax : result.daily.temperature_2m_max,
          temperatureMin : result.daily.temperature_2m_min,
          dailyDateTime : result.daily.time

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

  render(){
    return(
      <>
        <div className='container'>
          <div className="row">

            <Current 
              temperature = {this.state.current_weather.temperature}
              weatherCode = {this.state.current_weather.weathercode}
              windDirection = {this.state.current_weather.winddirection}
              windSpeed = {this.state.current_weather.windspeed}
              dateTime = {this.state.current_weather.time}
              elevation = {this.state.data.elevation}
              dailyWeather = {this.state.daily_weather}
              sendCurrentCity = {this.onCityChanged}
            />
          </div>

          <div className='divider'>

          </div>

          <div className='row'>

           {this.test(0)}
           {this.test(1)}
           {this.test(2)}
           {this.test(3)}
           {this.test(4)}
           {this.test(5)}
           {this.test(6)}
          </div>

        </div>

        <div className='layover'>

        </div>
      </>
    )
  }
}

export default App;
