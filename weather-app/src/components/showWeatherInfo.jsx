/* eslint-disable react/prop-types */
import '../App.css'

export function ShowWeatherInfo ({ info, error }) {
  return (
    <main>
      {error
        ? (
          <div className='info-container'>
            <h3 className='error-message'>{error}</h3>
          </div>
          )
        : (
            info
              ? (
                <div className='info-container'>
                  <h3 className='city-name'>{`${info.name}, ${info.sys.country}`}</h3>
                  <p className='date-info'><span className='day' /><span className='date' /></p>
                  <h2 className='weather-deg'>{Math.round(info.main.temp - 273.15)}°C</h2>
                  <h3 className='weather-condition'>{info.weather[0].description}</h3>
                  <h3 className='humidity'>{`humidity: ${info.main.humidity}%`}</h3>
                </div>
                )
              : (
                <div className='info-container'>
                  <h3 className='city-name' />
                  <p className='date-info'><span className='day' /><span className='date' /></p>
                  <h2 className='weather-deg' />
                  <h3 className='weather-condition' />
                  <h3 className='humidity' />
                </div>
                )
          )}
    </main>
  )
}
