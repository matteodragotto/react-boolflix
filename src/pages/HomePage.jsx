import MovieLists from "../components/MovieLists"
import TvLists from "../components/TvLists"

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Movies</h1>
        <MovieLists />
      </div>
      <div className="row">
        <h1>TV Series</h1>
        <TvLists />
      </div>

    </div>
  )
}

export default HomePage