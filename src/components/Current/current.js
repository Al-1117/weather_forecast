import React, { Component } from 'react'
import './current.scss';
import City from '../City/city';
import * as moment from 'moment'
import 'moment/locale/it'
import Daily from '../Daily/daily';
import getConditionInfo from '../getForecastInfo/getConditionInfo';
import getDescriptionInfo from '../getForecastInfo/getDescriptionInfo';





class Current extends Component{
    state = {
        city : {},
    }
    handleCityChange = (cityObj) => {
        this.setState({city : cityObj});
        this.props.sendCurrentCity(cityObj);
    }
    // getConditionInfo = (weatherCode)=>{
    //     switch (weatherCode) {
    //         case 1,2,3:
    //             return <BsCloudSun />;
   
    //         case 45,48:
    //             return <BsCloudFog2 />;

    //         case 51,53,55:
    //             return <BsCloudDrizzle />;

    //         case 56,57:
    //             return <FiCloudDrizzle />;
            
    //         case 61,63,65:
    //             return <BsCloudRain/>;

    //         case 66,67:
    //             return <BsCloudRain/>;

    //         case 71,73,75:
    //             return <BsCloudSnow/>;

    //         case 77:
    //             return <BsCloudHail/>;

    //         case 80,81,82:
    //             return <BsCloudRainHeavy/>;

    //         case 85,86:
    //             return <GiSnowing/>;
                
    //          case 95:
    //              return <RiThunderstormsLine/>;
                
    //         case 96,99:
    //             return <WiNightSnowThunderstorm/>;

    //         default:
    //             return <BsSun />
    //             break;
    //     }
    // }
   
    render(){
        <Daily/>
        const {city} = this.state;
        return(
            
            <div className="current">
                <div className="col weather_cond" style={{}}>

                    {getConditionInfo(this.props.weatherCode)}

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
                    <div>{moment.unix(this.props.dateTime).locale('it').format('dddd DD MMMM YYYY')}
                   </div>
                   <div className='weather_desc'> {getDescriptionInfo(this.props.weatherCode)}</div>
                </div>
                
            </div>
        )
    }
}

export default Current