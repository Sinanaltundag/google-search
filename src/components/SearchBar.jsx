import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../contexts/Context'


const SearchBar = () => {
  const [query, setQuery] = useState("")
const {setSearchQuery}= useResultContext();
const [debouncedValue]= useDebounce(query, 1000)

useEffect(() => {
if (debouncedValue) {
  setSearchQuery(debouncedValue)
}
}, [debouncedValue])


  return (
        <div className="relative ">
        <input
        value={query}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-800 border rounded-full shadow-sm outline-none p-6 text-black dark:text-white hover:shadow-lg"
        placeholder="🔎 Search Googlee or type URL"
        onChange={(e) => setQuery(e.target.value)}
      />
      {query&&(
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setQuery('')}>
          x
        </button>
        )}
        </div>
  )
}

export default SearchBar