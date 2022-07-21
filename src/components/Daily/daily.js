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
import{AiOutlineArrowUp } from 'react-icons/ai'
import{AiOutlineArrowDown } from 'react-icons/ai'
import './daily.scss'
import * as moment from 'moment'


export default function Daily(props){


    const getConditionInfo = (weatherCode)=>{
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
