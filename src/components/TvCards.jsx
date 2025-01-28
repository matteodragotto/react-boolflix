
const MovieCards = ({ media }) => {
  return (
    <div className="col-4 p-3">
      <div className="card">
        <img className="img-fluid" src={`https://image.tmdb.org/t/p/w342${media.poster_path}`} alt={media.name} />
        <div className="card-body">
          <h5 className="card-text">
            Titolo: {media.name}
          </h5>
          <p className="card-text">
            Titolo originale: {media.original_name}
          </p>
          <p>Lingua: {media.original_language}</p>
          <p>Rating: {media.vote_average}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieCards