import { Outlet } from "react-router-dom"
import SearchBar from "../components/SearchBar"

export const DefaultLayout = () => {
  return (
    <>
      <header className="d-flex justify-content-between">
        <div className="logo">
          <img src="../public/img/logoBoolFlix.png" alt="BoolFlix" />
        </div>
        <div className="div">
          <SearchBar />
        </div>

      </header>
      <main>
        <Outlet />
      </main>
    </>

  )
}
