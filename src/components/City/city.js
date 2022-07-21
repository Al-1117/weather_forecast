import { Component } from "react";
import './city.scss';
import '../assets/cities.json'

class City extends Component{
   

    state = {
        cities : [ 
            {
                id: 0,
                name: 'Bergamo',
                latitude: 45.69, 
                longitude:9.67
            },
            {
                id: 1,
                name: 'Milan',
                latitude: 45.46, 
                longitude:9.18
            },
            {
                id: 2,
                name: 'Dakar',
                latitude: 14.71, 
                longitude:-17.47
            },
            {
                id: 3,
                name: 'Ho Chi Minh',
                latitude: 10.83, 
                longitude:106.66
            },
            {
                id: 4,
                name: 'Köln',
                latitude: 50.94, 
                longitude:6.94
            },
            {
                id: 5,
                name: 'Paris',
                latitude: 48.86, 
                longitude:2.34
            },
            {
                id: 6,
                name: 'Budapest',
                latitude: 47.49, 
                longitude:19.04
            },
            {
                id: 7,
                name: 'Barcelona',
                latitude: 41.40, 
                longitude:2.16
            },
            {
                id: 8,
                name: 'London',
                latitude: 51.51, 
                longitude:-0.12
            },
            {
                id: 9,
                name: 'Cape Town',
                latitude: -33.92, 
                longitude: 18.39
            },
        ]
     
    }

    handleCityChange = (event) => {
        // Getting the city Obj selected by user
        const selectedCity = this.state.cities.find((city) => city.name === event.target.value)
        // I send the selected city to Current Component
        this.props.sendCity(selectedCity);
        event.preventDefault();
   }
   

    render(){
        return(
            <>
            <div className="col-4 search">
                <select className='form-select dark_mode' name="city" id="city" onChange={this.handleCityChange}>
                    {this.state.cities.map((city) => 
                    <option key={city.id} value={city.name}>{city.name}  </option>)}
                </select>
            </div>
            </>           
        )
    }
}
export default City;