import React, { useState } from 'react'
import useSearch from 'hooks/useSearch'

export default function SearchInput() {
    const [searchInput, setSearchInput] = useState("")
    const { searchByCapital } = useSearch()

    const handleForm = (e) => {
        e.preventDefault()
        searchByCapital(searchInput)
    }

    return (
        <div>
            <p>Search By Capital</p>
            <form onSubmit={handleForm}>
                <input name="search"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)} />
            </form>
        </div>
    )
}
