import React, { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemp = () => setIsCelsius(!isCelsius)

  return (
    <article className='container'>
      <h1 className='main-tittle'>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <div className='div-p'>
        <div className='variable'>
          <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
        </div>
        <section className='information'>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul className='conditions'>
            <li><span>Wind Speed: </span><span className='details'>{weather?.wind.speed} meter/sec</span></li>
            <li><span>Clouds: </span><span className='details'>{weather?.clouds.all} %</span></li>
            <li><span>Pressure: </span><span className='details'>{weather?.main.pressure} hPa</span></li>
          </ul>
        </section>
      </div>
      <h2>{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
      <button onClick={handleChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
    </article>
  )
}

export default WeatherCard