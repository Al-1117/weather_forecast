import React from 'react'

export default function getForecast(cityObj) {
  return (
    
    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + cityObj.latitude + "&longitude=" + cityObj.longitude + "&hourly=temperature_2m&current_weather=true")
    .then(res => res.json())
    
  )
}
