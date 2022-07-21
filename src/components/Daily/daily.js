import{BsSun } from 'react-icons/bs'
import{BsCloudSun } from 'react-icons/bs'
import{AiOutlineArrowUp } from 'react-icons/ai'
import{AiOutlineArrowDown } from 'react-icons/ai'
import './daily.scss'
import * as moment from 'moment'


export default function Daily(props){
    console.log(props.temperatureMax);
    return(
        <div className='col daily'>
            <div className="day">
            {moment.unix(props.dailyDateTime).format('dddd DD MMMM')}
            </div>
            <div className="condition">
                <BsCloudSun />
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
