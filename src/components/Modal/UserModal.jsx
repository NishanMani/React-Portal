import "./UserModal.css"

function UserModal({ user, onClose, onViewProfile }) {
  if (!user) return null

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h3>User Details</h3>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>

        <div className="modal-actions">
          <button onClick={onViewProfile}>
            View Profile
          </button>

          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>

      </div>
    </div>
  )
}

export default UserModal