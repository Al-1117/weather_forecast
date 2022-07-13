import React, { Component } from 'react'
import cities from '../assets/cities.json'

class GetData extends Component{

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
        var lon = cities.map((city) => city.longitude)
        var lat = cities.map((city) => city.latitude);
        
        console.log(lon);
        console.log(lat);
        

        fetch("https://api.open-meteo.com/v1/forecast?latitude=''&longitude=13.41&hourly=temperature_2m&current_weather=true")
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
}
export default GetData;