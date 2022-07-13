import { Component } from "react";
import './city.scss';
import '../assets/cities.json'

class City extends Component{
   

    state = {
        n : "",
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
                name: 'Koln',
                latitude: 50.94, 
                longitude:6.94
            },
            {
                id: 5,
                name: 'Moulins',
                latitude: 46.56, 
                longitude:3.32
            },
            {
                id: 6,
                name: 'Budapest',
                latitude: 47.49, 
                longitude:19.04
            },
            {
                id: 7,
                name: 'Cape Town',
                latitude: -33.92, 
                longitude: 18.39
            },
        ]

       
        // [this.city, this.setCity] = useState("Seleziona una città ")  
    }

    handleCityChange = (event) => {
         this.props.sendCityName(event.target.value);
         event.preventDefault();
        console.log(event.target.value);
        this.setState({name : event.target.value})
    }
   

    render(){
        return(
            <>
            <div className="col-4 search">
                <select className='form-select' name="city" id="city" onChange={this.handleCityChange}>
                    {this.state.cities.map((city) => 
                    <option key={city.id} value={city.name}>{city.name}  </option>)}
                </select>
            </div>
            </>           
        )
    }
}
export default City;