
const MovieCards = ({ movie }) => {
  return (
    <div className="col-4 p-3">
      <div className="card">
        <img className="img-fluid" src='' alt='' />
        <div className="card-body">
          <h5 className="card-text">
            Titolo: {movie.title}
          </h5>
          <p className="card-text">
            Titolo originale: {movie.original_title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCards