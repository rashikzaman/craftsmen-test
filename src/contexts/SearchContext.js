import {useState} from 'react'
import constate from 'constate'

const useSearch = () => {

    const [countries, setCountries] = useState([])
    return {
        countries,
        setCountries
    }
}

export const [SearchProvider, useSearchContext] = constate(useSearch)