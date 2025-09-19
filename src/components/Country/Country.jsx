import './Country.css'
export default function Country({country}) {
    // console.log(country);
  return (
    <div className='country'>
        <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} />
        <h3>Country: {country.name?.common}</h3>
        <h3>Area: {country.area?.area}</h3>
        <p>Catogory: Big Country</p>
        <h4>Population: {country.population?.population}</h4>
        <button>Visited</button>
    </div>
  )
}
