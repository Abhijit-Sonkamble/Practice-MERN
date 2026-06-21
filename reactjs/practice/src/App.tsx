import { Outlet, useNavigate } from "react-router"


function App() {

  const navigate = useNavigate()

  return (
    <>
    <Outlet/>
    </>
  )
}

export default App
