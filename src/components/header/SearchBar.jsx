import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { searchController } from '../../controllers/searchController'
import { IconSearch } from '../common/Icons'

export function SearchBar() {
  const [searchParams] = useSearchParams()
  const currentQuery = searchController.getSearchQueryFromUrl(searchParams)
  const [query, setQuery] = useState(currentQuery || '')
  const navigate = useNavigate()

  useEffect(() => {
    if (currentQuery) {
      setQuery(currentQuery)
    }
  }, [currentQuery])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchController.handleSearch(query, navigate)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center">
      <div className="relative w-full flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products"
          aria-label="Search for products"
          className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-[#551760] transition-colors"
        />
        <button
          type="submit"
          aria-label="Search"
          className="px-3 sm:px-4 py-2 bg-white text-[#551760] border border-l-0 border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer shrink-0"
        >
          <IconSearch className="w-4 h-4 text-[#551760]" />
        </button>
      </div>
    </form>
  )
}
