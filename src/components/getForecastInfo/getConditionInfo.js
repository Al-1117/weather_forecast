import React from 'react'
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

export default function getConditionInfo(weatherCode) {

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
