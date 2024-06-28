import { useState } from 'react'

export function useInfo () {
  const [info, setInfo] = useState(null)
  const [error, setError] = useState(null)

  function handleSubmit (event) {
    event.preventDefault()
    const city = event.target.elements['get-city'].value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=124b92a8dd9ec01ffb0dbf64bc44af3c`)
      .then(res => {
        if (!res.ok) {
          throw new Error('City not found')
        }
        return res.json()
      })
      .then(data => {
        setInfo(data)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setInfo(null)
      })
  }

  return { info, error, handleSubmit }
}
