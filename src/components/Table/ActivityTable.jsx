import "./ActivityTable.css"

function ActivityTable({ data }) {
  return (
    <div className="table-card">
      <h3>Recent Activities</h3>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.user}</td>
              <td>{item.action}</td>
              <td>{item.date}</td>
              <td>
                <span className={`status ${item.status}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ActivityTable