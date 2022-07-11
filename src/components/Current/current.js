import React, { Component } from 'react'
import './current.scss';
import{BsSun } from 'react-icons/bs'
import{BsCloudSun } from 'react-icons/bs'
import City from '../City/city';


class Current extends Component{
    render(){
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
                <div className="col-6">
                    <City/>
                </div>

               
              

                <div className="date_place col" style={{}}>
                   <div><strong>{this.props.city}</strong></div>
                   <div>{this.props.dateTime}</div>
                   <div>Soleggiato</div>
                </div>
                
            </div>
        )
    }
}

export default Current