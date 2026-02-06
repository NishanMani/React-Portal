import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../context/ AppContext"
import "./Header.css"

function Header() {
  const { state, dispatch } = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" })

    const newTheme =
      state.theme === "light" ? "dark" : "light"

    localStorage.setItem("theme", newTheme)
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem("user")
  }

  const goToProfile = () => {
    navigate("/profile")
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="logo">ReactPortal</div>

      <div className="header-right">
        <button onClick={handleTheme} className="theme-btn">
          {state.theme === "light"
            ? "🌙 Dark"
            : "☀️ Light"}
        </button>

        <div className="profile-box">
          <span
            onClick={() => setOpen(!open)}
            className="profile-name"
          >
            {state.user?.name}
          </span>

          {open && (
            <div className="dropdown">
              <p onClick={goToProfile}>
                Profile
              </p>

              <p onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header