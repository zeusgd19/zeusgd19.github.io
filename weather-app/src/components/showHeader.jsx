/* eslint-disable react/prop-types */
import '../../src/App.css'

export function ShowHeader ({ handleSubmit }) {
  return (
    <header>
      <h1 className='title'><img src='../src/assets/weather-icon.png' alt='Weather Logo' />Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input id='get-city' placeholder='Nules,Burriana...' />
      </form>
    </header>
  )
}
