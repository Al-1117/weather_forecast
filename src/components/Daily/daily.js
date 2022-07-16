import{BsSun } from 'react-icons/bs'
import{BsCloudSun } from 'react-icons/bs'
import{AiOutlineArrowUp } from 'react-icons/ai'
import{AiOutlineArrowDown } from 'react-icons/ai'
import './daily.scss'

export default function Daily(props){
    // let temperatureMax = props.dailyWeather.time;
    // const temperatureMin = props.dailyWeather;
    // console.log(temperatureMax);
    return(
        <div className='col daily'>
            <div className="day">
                Sabato 16
            </div>

            <div className="condition">
                <BsCloudSun />
            </div>

            <div className="temperature">
                <div className='degree max'>
                    <AiOutlineArrowUp/>
                    <span>37°</span>
                </div>

                <div className='degree min'>
                    <AiOutlineArrowDown/>
                    <span>34°</span>
                </div>
            </div>

        </div>

    )
}
