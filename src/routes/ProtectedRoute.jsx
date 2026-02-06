import { useContext } from "react"
import { AppContext } from "../context/ AppContext"
import Login from "../pages/Login/Login"

function ProtectedRoute({ children }) {
  const { state } = useContext(AppContext)

  if (!state.isAuthenticated) {
    return <Login />
  }

  return children
}

export default ProtectedRoute