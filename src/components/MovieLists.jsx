import { useGlobalContext } from "../context/GlobalContext"
import MovieCards from "./MovieCards"
import { useEffect } from "react"


const MovieLists = () => {

  const { searchData, fetchMovies } = useGlobalContext()


  return (
    <>
      {searchData.map(movie => (
        <MovieCards key={movie.id} movie={movie} />
      ))}
    </>
  )
}

export default MovieLists