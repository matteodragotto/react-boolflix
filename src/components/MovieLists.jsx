import { useGlobalContext } from "../context/GlobalContext"
import MovieCards from "./MovieCards"



const MovieLists = () => {

  const { searchResults } = useGlobalContext()

  const mediaType = searchResults.map(media => media.media_type === 'movie' ? <MovieCards key={media.id} media={media} /> : null)

  return (
    <>
      {mediaType}
    </>
  )
}

export default MovieLists