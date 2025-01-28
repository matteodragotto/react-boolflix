import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const apiKey = 'b6f58daad080043998101a992ca91623'




  return (
    <GlobalContext.Provider>
      {children}
    </GlobalContext.Provider>
  )
}


const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { useGlobalContext, GlobalProvider }