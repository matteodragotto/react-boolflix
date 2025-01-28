import { useGlobalContext } from "../context/GlobalContext"
import MovieCards from "./MediaCards"



const MovieLists = () => {

  const { searchResults } = useGlobalContext()

  const mediaType = searchResults.map(media => media.media_type === 'tv' ? <MovieCards key={media.id} media={media} /> : null)

  return (
    <>
      {mediaType}
    </>
  )
}

export default MovieLists