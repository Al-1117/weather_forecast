import React, { Component } from 'react'
import './current.scss';
import{BsSun } from 'react-icons/bs'
import{BsCloudSun } from 'react-icons/bs'
import{BsCloudFog2 } from 'react-icons/bs'
import{BsCloudDrizzle } from 'react-icons/bs'
import{FiCloudDrizzle } from 'react-icons/fi'
import{BsCloudRain } from 'react-icons/bs'
import{BsCloudSnow } from 'react-icons/bs'
import{BsCloudHail } from 'react-icons/bs'
import{BsCloudRainHeavy } from 'react-icons/bs'
import{GiSnowing } from 'react-icons/gi'
import{RiThunderstormsLine } from 'react-icons/ri'
import{WiNightSnowThunderstorm } from 'react-icons/wi'
import City from '../City/city';
import * as moment from 'moment'
import 'moment/locale/it'
import Daily from '../Daily/daily';





class Current extends Component{
    state = {
        city : {},
    }
    handleCityChange = (cityObj) => {
        this.setState({city : cityObj});
        this.props.sendCurrentCity(cityObj);
    }
    getConditionInfo = (weatherCode)=>{
        switch (weatherCode) {
            case 1,2,3:
                return <BsCloudSun />;
   
            case 45,48:
                return <BsCloudFog2 />;

            case 51,53,55:
                return <BsCloudDrizzle />;

            case 56,57:
                return <FiCloudDrizzle />;
            
            case 61,63,65:
                return <BsCloudRain/>;

            case 66,67:
                return <BsCloudRain/>;

            case 71,73,75:
                return <BsCloudSnow/>;

            case 77:
                return <BsCloudHail/>;

            case 80,81,82:
                return <BsCloudRainHeavy/>;

            case 85,86:
                return <GiSnowing/>;
                
             case 95:
                 return <RiThunderstormsLine/>;
                
            case 96,99:
                return <WiNightSnowThunderstorm/>;

            default:
                return <BsSun />
                break;
        }
    }
    getDescriptionInfo = (weatherCode)=>{
        switch (weatherCode) {
            case 1,2,3:
                return 'Parzialmente soleggiato';

            case 45,48:
                return 'Nebbia, Brina';

            case 51,53,55:
                return 'Pioviggine moderata';

            case 56,57:
                return 'Pioviggine fredda';

            case 61,63,65:
                return 'Pioggia';

            case 66,67:
                return 'Pioggia fredda';

            case 71,73,75:
                return 'Neve';

            case 77:
                return 'Grandine';

            case 80,81,82:
                return 'Pioggia intensa';

            case 85,86:
                return 'Neve intensa';
                
            case 95:
                return 'Temporale';
                
            case 96,99:
                return 'Tempesta con grandine';
                
            default:
                return 'Soleggiato'
                break;
        }
    }
    render(){
        <Daily/>
        const {city} = this.state;
        return(
            <div className="current">
                <div className="col weather_cond" style={{}}>

                    {this.getConditionInfo(this.props.weatherCode)}

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
                   <div className='weather_desc'> {this.getDescriptionInfo(this.props.weatherCode)}</div>
                </div>
                
            </div>
        )
    }
}

export default Current