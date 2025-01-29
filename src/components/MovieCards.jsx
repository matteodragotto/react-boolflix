import { useGlobalContext } from "../context/GlobalContext"

const MovieCards = ({ media }) => {

  const { ratingStars, flagLanguage, fetchCast, mediaCast } = useGlobalContext()

  const isNameIdentical = media.name === media.original_name
  const mediaRating = Math.floor(media.vote_average / 2)
  const imagePlaceholder = 'https://placehold.co/342x600'

  const imgUrl = () => {
    if (media.poster_path === null) {
      return imagePlaceholder
    } else {
      return `https://image.tmdb.org/t/p/w342${media.poster_path}`
    }
  }

  return (
    <div className="col-4 p-3">
      <div className="card">
        <img className="img-fluid" src={imgUrl()} alt={media.title} />
        <div className="card-body">
          <h5 className="card-text">
            Titolo: {media.title}
          </h5>
          <p className={`card-text ${isNameIdentical ? 'd-none' : ''}`}>
            Titolo originale: {media.original_title}
          </p>
          <p className="card-text">Lingua: <img src={`https://flagsapi.com/${flagLanguage(media.original_language).toUpperCase()}/flat/64.png`} /></p>
          <p className="card-text">Rating: {ratingStars(mediaRating)}</p>
          <p className="card-text overview">Overview: {media.overview}</p>
          <a onClick={() => fetchCast(media.id, media.media_type)}>Mostra attori</a>
          <p className="card-text">{mediaCast.map(actor => <span>{actor.name}  </span>)}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCards