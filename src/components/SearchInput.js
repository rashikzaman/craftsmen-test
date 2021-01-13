import React from 'react'
import { useSearchContext } from 'contexts/SearchContext'

export default function SearchInput() {

    const { searchInput, setSearchInput } = useSearchContext()

    const handleForm = (e) => {
        e.preventDefault()
        console.log(searchInput)
    }

    return (
        <form onSubmit={{ handleForm }}>
            <input name="search"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)} />
        </form>
    )
}
