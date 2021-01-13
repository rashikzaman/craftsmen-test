import React, { useState } from 'react'
import useApi from './useApi'
import { useSearchContext } from 'contexts/SearchContext'

const useSearch = () => {

    const { callApi } = useApi()
    const { setCountries, countries } = useSearchContext()

    /**
     * 
     * @param {string} input 
     */
    const searchByCapital = async (input) => {
        try {
            const result = await callApi(`https://restcountries.eu/rest/v2/capital/${input}`)
            if (result) {
                setCountries([...result])
            }
        } catch (e) {
            alert(e.message)
        }
    }
    return {
        searchByCapital
    }

}


export default useSearch