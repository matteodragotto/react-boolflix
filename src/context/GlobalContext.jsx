import axios from "axios"
import { createContext, useContext, useState } from "react"


const GlobalContext = createContext()



const GlobalProvider = ({ children }) => {

  const apiKey = import.meta.env.VITE_API_KEY
  const baseApiUrl = 'https://api.themoviedb.org/3/search/multi'

  const [searchResults, setSearchResults] = useState([])
  const [searchData, setSearchData] = useState('')


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






  return (
    <GlobalContext.Provider value={{ searchData, handlerSearch, searchResults, fetchMovies }} >
      {children}
    </GlobalContext.Provider >
  )
}


const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }