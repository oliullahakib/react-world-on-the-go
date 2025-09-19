
import { use } from "react";
import Country from "../Country/Country";
import "./countries.css"
function Countries({ countryPomiss }) {
    const CountriesData = use(countryPomiss)
    return (
        <>
            <h1>All Countries:{CountriesData.countries.length}</h1>
            <div className="countries">
                {
                    CountriesData.countries.map(country =><Country key={country.cca3.cca3} country={country} />)
                }
            </div>
                <div>
                    <h2>Visited Countries:</h2>
                </div>
        </>
    )
}
export default Countries;