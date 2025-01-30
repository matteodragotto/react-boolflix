import { Outlet } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import GenreSelect from "../components/GenreSelect"

export const DefaultLayout = () => {
  return (
    <>
      <header className="d-flex justify-content-between">
        <div className="logo">
          <a href="/"><img src="../public/img/logoBoolFlix.png" alt="BoolFlix" /></a>
        </div>
        <div className="d-flex justify-content-center">
          <GenreSelect />
          <SearchBar />
        </div>

      </header>
      <main>
        <Outlet />
      </main>
    </>

  )
}
