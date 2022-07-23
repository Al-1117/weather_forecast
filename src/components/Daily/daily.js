
import{AiOutlineArrowUp } from 'react-icons/ai'
import{AiOutlineArrowDown } from 'react-icons/ai'
import './daily.scss'
import * as moment from 'moment'
import getConditionInfo from '../getForecastInfo/getConditionInfo'


export default function Daily(props){



    return(
        <div className='col daily'>
            <div className="day">
            {moment.unix(props.dailyDateTime).locale('it').format('ddd DD MMMM')}
            </div>
            <div className="condition">
                {getConditionInfo(props.dailyWeatherCode)}
            </div>

            <div className="temperature">
                <div className='degree max'>
                    <AiOutlineArrowUp/>
                    <span>{props.temperatureMax}</span>
                </div>

                <div className='degree min'>
                    <AiOutlineArrowDown/>
                    <span>{props.temperatureMin}</span>
                </div>
            </div>
        </div>
    )
}
