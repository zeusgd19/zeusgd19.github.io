import './App.css'
import { ShowHeader } from '../src/components/showHeader'
import { ShowWeatherInfo } from './components/showWeatherInfo'
import { useInfo } from './hooks/useInfo'
function App () {
  const { info, handleSubmit, error } = useInfo()
  return (
    <>
      <ShowHeader handleSubmit={handleSubmit} />
      <ShowWeatherInfo info={info} error={error} />
    </>
  )
}

export default App
