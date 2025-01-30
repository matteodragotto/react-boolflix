import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const GenreSelect = () => {

  const { searchResults, fetchGenres, genresData, setSearchResults } = useGlobalContext()

  const [startingResults, setStartingResults] = useState([])

  const filteredResults = (e) => {
    setStartingResults(searchResults)
    const selectedGenreId = e.target.value;

    if (selectedGenreId) {
      const filtered = searchResults.filter(media => media.genre_ids.includes(parseInt(selectedGenreId)));
      setSearchResults(filtered);
    } else {
      setSearchResults(startingResults);
    }
  }

  useEffect(() => {
    fetchGenres()
  }, [])

  return (
    <div>
      <select className="m-1" name="cars" id="cars" onChange={filteredResults}>
        <option defaultValue>Seleziona una genere</option>
        {genresData.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
      </select>
    </div>
  )
}

export default GenreSelect