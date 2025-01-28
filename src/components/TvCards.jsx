import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

const MovieCards = ({ media }) => {

  const { ratingStars, fetchCountry, originCountry, searchData } = useGlobalContext()

  const isNameIdentical = media.name === media.original_name
  const mediaRating = Math.floor(media.vote_average / 2)

  return (
    <div className="col-4 p-3">
      <div className="card">
        <img className="img-fluid" src={`https://image.tmdb.org/t/p/w342${media.poster_path}`} alt={media.name} />
        <div className="card-body">
          <h5 className="card-text">
            Titolo: {media.name}
          </h5>
          <p className={`card-text ${isNameIdentical ? 'd-none' : ''}`}>
            Titolo originale: {media.original_name}
          </p>
          <p className="card-text">Lingua: {media.original_language}</p>
          <p className="card-text">Rating: {ratingStars(mediaRating)}</p>
          <p className="card-text">Overview: {media.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCards