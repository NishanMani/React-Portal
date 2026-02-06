import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext } from "react"
import { AppContext } from "./context/ AppContext"

import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"

import Dashboard from "./pages/Dashboard/Dashboard"
import Users from "./pages/Users/Users"
import Reports from "./pages/Reports/Reports"
import Profile from "./pages/Profile/Profile"
import Login from "./pages/Login/Login"

import ProtectedRoute from "./routes/ProtectedRoute"
import "./App.css"

function App() {
  const { state } = useContext(AppContext)

  if (!state.isAuthenticated) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <div className={`layout ${state.theme}`}>
        <Header />

        <div className="main">
          <Sidebar />

          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <Users />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/reports"
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App