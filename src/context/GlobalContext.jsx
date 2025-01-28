import axios from "axios"
import { createContext, useContext, useState } from "react"


const GlobalContext = createContext()



const GlobalProvider = ({ children }) => {

  const apiKey = import.meta.env.VITE_API_KEY
  const baseApiUrl = 'https://api.themoviedb.org/3/search/multi'
  const [searchData, setSearchData] = useState([])




  const fetchMovies = () => {
    axios.get(`${baseApiUrl}?api_key=${apiKey}&query=matrix`)
      .then(res => {
        console.log(res.data);
        setSearchData(res.data.results)
      })
  }






  return (
    <GlobalContext.Provider value={{ searchData, fetchMovies }} >
      {children}
    </GlobalContext.Provider >
  )
}


const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }