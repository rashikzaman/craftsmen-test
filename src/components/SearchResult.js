import React, {useEffect} from 'react'
import { useSearchContext } from 'contexts/SearchContext'

export default function SearchResult() {

    const { countries, setSelectedCountry, selectedCountry } = useSearchContext()

    useEffect(() => {
        setSelectedCountry(null) //reset selected country if new countries loaded
    }, [countries])

    const isSelected = (index) => {
        if(!selectedCountry) return false;
        else{
            return countries[index].name === selectedCountry.name
        }
    }

    return (
        <div className="search">
            <p>Results:</p>
            <ul>
                {countries.map((country, index) => {
                    return <li
                        key={index}
                        onClick={() => { setSelectedCountry({...countries[index]}) }}
                        style={isSelected(index) ? {color: 'blue'} : {}}
                    >{country.name}</li>
                })}
            </ul>
        </div>
    )
}
