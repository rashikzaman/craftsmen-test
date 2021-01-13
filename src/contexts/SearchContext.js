import {useState, useEffect} from 'react'
import constate from 'constate'

const useSearch = () => {

    const [searchInput, setSearchInput] = useState("")

    return {
        searchInput,
        setSearchInput
    }

}

export const [SearchProvider, useSearchContext] = constate(useSearch)