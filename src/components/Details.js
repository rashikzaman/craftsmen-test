import React from 'react'
import {useSearchContext} from 'contexts/SearchContext'

export default function Details() {

    const {selectedCountry} = useSearchContext()
    return (
        <div>
            <p>Country Details</p>
            {selectedCountry && <div>
                <p>Name : {selectedCountry.name}</p>
                <p>Capital: {selectedCountry.capital}</p>
                <p>Languages : {selectedCountry.languages.map((lan) => lan.name).join()}</p>
                </div>}
        </div>
    )
}
