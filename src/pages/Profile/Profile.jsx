import { useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from "../../context/ AppContext"
import "./Profile.css"

function Profile() {
  const { state, dispatch } = useContext(AppContext)
  const location = useLocation()

  const userData = location.state || state.user

  const [name, setName] = useState(userData.name)
  const [email, setEmail] = useState(userData.email)
  const [role, setRole] = useState(userData.role)
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedUser = {
      ...userData,
      name,
      email,
      role
    }

    dispatch({
      type: "UPDATE_USER",
      payload: updatedUser
    })

    localStorage.setItem("user", JSON.stringify(updatedUser))

    setMessage("Profile updated successfully ✅")
  }

  return (
    <div className="profile-page">

      <h2>Profile</h2>

      {message && <p className="success">{message}</p>}

      <form onSubmit={handleSubmit} className="profile-form">

        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Admin</option>
          <option>User</option>
        </select>

        <button type="submit">Save Changes</button>

      </form>

    </div>
  )
}

export default Profile