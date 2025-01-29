import { Outlet } from "react-router-dom"
import SearchBar from "../components/SearchBar"

export const DefaultLayout = () => {
  return (
    <>
      <header className="d-flex justify-content-between">
        <h1>BoolFlix</h1>
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
