import { Outlet } from "react-router-dom"

export const DefaultLayout = () => {
  return (
    <>
      <header>

      </header>
      <main>
        <Outlet />
      </main>
    </>

  )
}
