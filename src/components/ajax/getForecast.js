import React from 'react'

export default function getForecast(cityObj) {
  return (
    
    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + cityObj.latitude + "&longitude=" + cityObj.longitude + "&daily=weathercode,temperature_2m_max,temperature_2m_min&timeformat=unixtime&timezone=Europe%2FBerlin&current_weather=true")
    .then(res => res.json())
    
  )
}
