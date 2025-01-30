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
        className="m-1"
        type="text"
        placeholder="Cerca..."
        value={searchData}
        onChange={handlerSearch}
      />
    </div>
  )
}

export default SearchBar