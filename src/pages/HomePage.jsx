import MovieLists from "../components/MovieLists"
import TvLists from "../components/TvLists"
import { useGlobalContext } from "../context/GlobalContext"

const HomePage = () => {

  const { searchResults } = useGlobalContext()
  return (
    <div className="container x-5">
      <div className="row">
        <h1>{searchResults.length === 0 ? '' : 'Movies'}</h1>
        <MovieLists />
      </div>
      <div className="row">
        <h1>{searchResults.length === 0 ? '' : 'TV Series'}</h1>
        <TvLists />
      </div>

    </div>
  )
}

export default HomePage