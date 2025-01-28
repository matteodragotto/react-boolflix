import { Outlet } from "react-router-dom"
import SearchBar from "../components/SearchBar"

export const DefaultLayout = () => {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>

  )
}
