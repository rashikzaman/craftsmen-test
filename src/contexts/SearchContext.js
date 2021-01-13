import {useState} from 'react'
import constate from 'constate'

const useSearch = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    return {
        countries,
        setCountries,
        selectedCountry,
        setSelectedCountry
    }
}

export const [SearchProvider, useSearchContext] = constate(useSearch)