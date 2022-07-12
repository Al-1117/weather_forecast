import React, { Component } from 'react'
import './current.scss';
import{BsSun } from 'react-icons/bs'
import{BsCloudSun } from 'react-icons/bs'
import City from '../City/city';


class Current extends Component{
    state = {
        city : "",
    }
    handleCityChange = (cityName) => {
        this.setState({city : cityName})
    }
    render(){
        const {city} = this.state;
        return(
            <div className="row current">
                <div className="col weather_cond" style={{}}>

                    {   this.props.weatherCode === 3 ? 
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
                        <li>Velocità: {this.props.windSpeed}</li>
                        
                    </ul>
                
                </div>
                <div className="city col-6">
                    
                    <City
                        sendCityName = {this.handleCityChange}
                    />
                </div>

               
              

                <div className="date_place col" style={{}}>
                    <div className='city_name'><h2>{city == '' ? 'Bergamo' : city}</h2></div>
                   <div>{this.props.dateTime}</div>
                   <div>Soleggiato</div>
                </div>
                
            </div>
        )
    }
}

export default Current