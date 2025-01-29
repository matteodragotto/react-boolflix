import { useEffect } from "react"
import { useGlobalContext } from "../context/GlobalContext"


const SearchBar = () => {

  const { searchData, handlerSearch, fetchMedia, fetchPopularMedia } = useGlobalContext()

  useEffect(() => {
    if (searchData == '') {
      fetchPopularMedia();
    } else {
      fetchMedia();
    }
  }, [searchData]);


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