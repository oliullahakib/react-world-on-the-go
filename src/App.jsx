import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countryPomiss = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() {
  

  return (
    <>
      <div>
    <Suspense fallback={"loding.."}>
      <Countries countryPomiss={countryPomiss}/>
      </Suspense>
      </div>
    </>
  )
}

export default App
