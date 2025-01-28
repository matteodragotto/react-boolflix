import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"


const SearchBar = () => {

  const { searchData, handlerSearch, fetchMovies } = useGlobalContext()

  useEffect(() => {
    fetchMovies()
  }, [searchData])

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca..."
        value={searchData}
        onChange={handlerSearch}
      />
    </div>
  )
}

export default SearchBar