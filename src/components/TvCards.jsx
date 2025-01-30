import { useGlobalContext } from "../context/GlobalContext"
import { useState } from "react"
import axios from "axios"

const MovieCards = ({ media }) => {

  const { ratingStars, flagLanguage, mediaDetailsApiUrl, apiKey } = useGlobalContext()
  const [tvCast, setTvCast] = useState([])

  const isNameIdentical = media.name === media.original_name
  const mediaRating = Math.ceil(media.vote_average / 2)
  const imagePlaceholder = 'https://placehold.co/342x600'

  const imgUrl = () => {
    if (media.poster_path === null) {
      return imagePlaceholder
    } else {
      return `https://image.tmdb.org/t/p/w342${media.poster_path}`
    }
  }

  const fetchCast = () => {
    axios.get(`${mediaDetailsApiUrl}${media.media_type}/${media.id}/credits?api_key=${apiKey}`)
      .then(res => {
        setTvCast(res.data.cast.slice(0, 5))
        console.log(res.data.cast.slice(0, 5));
      })
  }


  return (
    <div className="p-3">
      <div className="card">
        <img className="img-fluid" src={imgUrl()} alt={media.name} />
        <div className="card-body">
          <h5 className="card-text">
            Titolo: {media.name}
          </h5>
          <p className={`card-text ${isNameIdentical ? 'd-none' : ''}`}>
            Titolo originale: {media.original_name}
          </p>
          <p className="card-text">Lingua: <img src={`https://flagsapi.com/${flagLanguage(media.original_language).toUpperCase()}/flat/64.png`} /></p>
          <p className="card-text">Rating: {ratingStars(mediaRating)}</p>
          <p className="card-text overview">Overview: {media.overview}</p>
          <a onClick={() => fetchCast(media.id, media.media_type)}>Mostra cast</a>
          <ul className="list-group">
            {tvCast.map(actor => <li key={actor.id}><img src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} alt={actor.name} /></li>)}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default MovieCards