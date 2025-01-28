import { useGlobalContext } from "../context/GlobalContext"
import TvCards from "./TvCards"



const MovieLists = () => {

  const { searchResults } = useGlobalContext()

  const mediaType = searchResults.map(media => media.media_type === 'tv' ? <TvCards key={media.id} media={media} /> : null)

  return (
    <>
      {mediaType}
    </>
  )
}

export default MovieLists