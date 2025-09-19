
import { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css"
function Countries({ countryPomiss }) {
    const CountriesData = use(countryPomiss)
    const [visitedCountries,setVisitedCountries] = useState([])
    const handelVisitedCountries =(country)=>{
        let newVisitedCountries =[...visitedCountries,country]
       setVisitedCountries(newVisitedCountries)
    }
    console.log(visitedCountries );
    return (
        <>
            <div>
                <h2>Visited Countries:</h2>
                <div className="visited-contries">
                    {visitedCountries.map((country,index) => <img key={index} src={country.flags.flags.png}></img>)}
                </div>
            </div>
            <h1>All Countries:{CountriesData.countries.length}</h1>
            <div className="countries">
                {
                    CountriesData.countries.map(country => <Country 
                        key={country.cca3.cca3} 
                        country={country}
                        handelVisitedCountries ={handelVisitedCountries}
                         />)
                }
            </div>

        </>
    )
}
export default Countries;