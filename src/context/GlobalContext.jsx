import axios from "axios"
import { createContext, useContext, useState } from "react"


const GlobalContext = createContext()



const GlobalProvider = ({ children }) => {

  const apiKey = import.meta.env.VITE_API_KEY
  const baseApiUrl = 'https://api.themoviedb.org/3/search/multi'
  const mediaDetailsApiUrl = 'https://api.themoviedb.org/3/'


  const [searchResults, setSearchResults] = useState([])
  const [searchData, setSearchData] = useState('')
  const [originCountry, setOriginCountry] = useState([])


  const handlerSearch = (e) => {
    setSearchData(e.target.value)
  }


  const fetchMovies = () => {
    axios.get(`${baseApiUrl}?api_key=${apiKey}&query=${searchData}`)
      .then(res => {
        console.log(res.data);
        setSearchResults(res.data.results)
      })
  }

  const fetchCountry = (id, mediaType) => {
    axios.get(`${mediaDetailsApiUrl}${mediaType}/${id}?api_key=${apiKey}`)
      .then(res => {
        setOriginCountry(res.data.origin_country)
        console.log(originCountry);

      })
  }


  const ratingStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>)
      } else {
        stars.push(<i key={i} className="fa-regular fa-star"></i>)
      }
    }
    return stars
  }

  return (
    <GlobalContext.Provider value={{ searchData, handlerSearch, searchResults, fetchMovies, fetchCountry, originCountry, ratingStars }} >
      {children}
    </GlobalContext.Provider >
  )
}


const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }