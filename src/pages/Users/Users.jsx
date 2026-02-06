import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { users as userData } from "../../data/users"
import UserModal from "../../components/Modal/UserModal"
import "./Users.css"

function Users() {
  const [search, setSearch] = useState("")
  const [role, setRole] = useState("All")
  const [selectedUser, setSelectedUser] = useState(null)

  const navigate = useNavigate()

  const filteredUsers = userData.filter((user) => {
    const matchSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())

    const matchRole =
      role === "All" || user.role === role

    return matchSearch && matchRole
  })

  const openModal = (user) => {
    setSelectedUser(user)
  }

  const closeModal = () => {
    setSelectedUser(null)
  }

  const viewProfile = () => {
    navigate("/profile", { state: selectedUser })
  }

  return (
    <div className="users-page">

      <h2>Users</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>All</option>
          <option>Admin</option>
          <option>User</option>
        </select>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => openModal(user)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <UserModal
        user={selectedUser}
        onClose={closeModal}
        onViewProfile={viewProfile}
      />

    </div>
  )
}

export default Users