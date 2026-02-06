import { useState, useContext } from "react"
import { AppContext } from "../../context/ AppContext"
import { login } from "../../services/authService"
import "./Login.css"

function Login() {
  const { dispatch } = useContext(AppContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("All fields are required")
      return
    }

    const user = login(email, password)

    if (!user) {
      setError("Invalid credentials")
      return
    }

    dispatch({ type: "LOGIN", payload: user })
    localStorage.setItem("user", JSON.stringify(user))
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
