import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

  const apiKey = process.env.REACT_APP_API_KEY




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