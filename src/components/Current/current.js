import React, { Component } from 'react'
import './current.scss';
import{BsSun } from 'react-icons/bs'
import{BsCloudSun } from 'react-icons/bs'
import City from '../City/city';
import * as moment from 'moment'





class Current extends Component{
    state = {
        city : {},
    }
    handleCityChange = (cityObj) => {
        this.setState({city : cityObj});
        this.props.sendCurrentCity(cityObj);
    }
    render(){
        let temperatureMax = this.props.dailyWeather;
        for (let index = 0; index < this.props.dailyWeather.length; index++) {
            const element = this.props.dailyWeather[index];

            console.log(element);
            
        }
    const temperatureMin = this.props.dailyWeather;
    console.log(temperatureMax);
        const {city} = this.state;
        return(
            <div className="current">
                <div className="col weather_cond" style={{}}>

                    {   this.props.weatherCode !== 0 ? 
                        (
                            <div>
                                <BsCloudSun />
                            </div>
                            )
                            :
                            (
                            <div>
                                <BsSun />
                            </div>
                        )
                    }

                    {/* Degree */}
                    <h3>{this.props.temperature}<sup style={{fontSize: '18px'}}>°C</sup></h3> 

                    {/* Wind */}
                    <ul>
                        <li>Vento</li>
                        <li>Direzione: {this.props.windDirection}</li>
                        <li>Velocità: {this.props.windSpeed} km/h</li>
                        <li>Elevazione: {this.props.elevation}</li>
                        
                    </ul>
                
                </div>
                <div className="city col-5">
                    
                    <City
                        sendCity = {this.handleCityChange}
                    />
                </div>

               
              

                <div className="date_place col" style={{}}>
                    <div className='city_name'><h2>{Object.keys(city).length === 0 ? city.name = 'Bergamo' : city.name}</h2></div>
                   {/* <div><Moment parse="DD-MM HH:mm">{this.props.dateTime}</Moment> */}
                    {/* <div>{moment(this.props.dateTime).format("DD MM YYYY")} */}
                    <div>{moment.unix(this.props.dateTime).format('dddd, MMM YYYY h:mm:ss A')}
                   </div>
                   <div>Soleggiato</div>
                </div>
                
            </div>
        )
    }
}

export default Current