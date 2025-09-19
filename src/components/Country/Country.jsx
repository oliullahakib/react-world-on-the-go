import { useState } from 'react';
import './Country.css'
export default function Country({country,handelVisitedCountries}) {
    // console.log(country);
    const [visited,setVisited]= useState(false)
    const handelVisited =()=>{
        setVisited(!visited)
        handelVisitedCountries(country)
    }
  return (
    <div className={visited?'country-visited':'country'}>
        <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} />
        <h3>Country: {country.name?.common}</h3>
        <h3>Area: {country.area?.area}</h3>
        <p>Catogory: {country.area.area>100000?"Big":country.area.area>50000?"Medium":"Small"} Country</p>
        <h4>Population: {country.population?.population}</h4>
        <button onClick={handelVisited}>{visited?' Visited':'Not Visited'}</button>
    </div>
  )
}
