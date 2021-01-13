import React from 'react'
import { useSearchContext } from 'contexts/SearchContext'

export default function SearchResult() {

    const { countries, setSelectedCountry } = useSearchContext()

    return (
        <div className="search">
            <p>Results:</p>
            <ul>
                {countries.map((country, index) => {
                    return <li
                        key={index}
                        onClick={() => { setSelectedCountry(index) }}
                    >{country.name}</li>
                })}
            </ul>
        </div>
    )
}
