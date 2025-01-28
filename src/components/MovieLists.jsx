import { useGlobalContext } from "../context/GlobalContext"
import MovieCards from "./MovieCards"
import { useEffect } from "react"


const MovieLists = () => {

  const { searchResults, fetchMovies } = useGlobalContext()

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <>
      {searchResults.map(movie => (
        <MovieCards key={movie.id} movie={movie} />
      ))}
    </>
  )
}

export default MovieLists