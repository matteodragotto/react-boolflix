import axios from "axios"
import { createContext, useContext, useState, useEffect } from "react"


const GlobalContext = createContext()



const GlobalProvider = ({ children }) => {

  const apiKey = import.meta.env.VITE_API_KEY
  const baseApiUrl = 'https://api.themoviedb.org/3/search/multi'
  const mediaDetailsApiUrl = 'https://api.themoviedb.org/3/'


  const [searchResults, setSearchResults] = useState([])
  const [searchData, setSearchData] = useState('')
  // const [originCountry, setOriginCountry] = useState([])


  const handlerSearch = (e) => {
    setSearchData(e.target.value)
  }


  const fetchMedia = () => {
    axios.get(`${baseApiUrl}?api_key=${apiKey}&query=${searchData}`)
      .then(res => {
        setSearchResults(res.data.results)

      })
  }

  const fetchPopularMedia = () => {
    axios.get(`${mediaDetailsApiUrl}trending/all/week?api_key=${apiKey}`)
      .then(res => {
        setSearchResults(res.data.results)
      })
  }

  const ratingStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fa-solid fa-star" style={{ color: "#ff0000", }}></i>)
      } else {
        stars.push(<i key={i} className="fa-regular fa-star"></i>)
      }
    }
    return stars
  }

  const flagLanguage = (original_language) => {
    let language = ''
    if (original_language === 'en') {
      language = 'US'
    } else if (original_language === 'ja') {
      language = 'JP'
    } else {
      language = original_language
    }

    return language
  }

  const value = {
    searchData,
    handlerSearch,
    searchResults,
    fetchMedia,
    ratingStars,
    flagLanguage,
    mediaDetailsApiUrl,
    apiKey,
    fetchPopularMedia
  }

  return (
    <GlobalContext.Provider value={value} >
      {children}
    </GlobalContext.Provider >
  )
}


const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }