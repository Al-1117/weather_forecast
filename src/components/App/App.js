import './App.css';
import React from 'react';
import Current from '../Current/current';
import cities from '../assets/cities.json'
import City from '../City/city';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      current_weather : {},
      isLoaded: false,
      error: null,
      city : "",      
    }
  }

  componentDidMount(){
    var city = cities.map(city =>(
      <City
        id={city.id}
        name={city.name}
        longitude={city.longitude}
        latitude={city.latitude}
      />
      )
    );


      console.log(city);
      //var a = cities.filter(city23 => city23.id == city.props.id)

      //console.log(a);
      // this.setState({cards});
    

  

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

  
    
  

  // handleDelete = cityId =>{
  //   const cities = this.cities.filter(city => city.id !== cityId)
  //   this.setState({cities});
  // }

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
            windSpeed = {this.state.current_weather.windspeed}
            dateTime = {this.state.current_weather.time}
            elevation = {this.state.data.elevation}

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
