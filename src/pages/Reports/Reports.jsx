import { useState } from "react"
import { reports as reportData } from "../../data/reports"
import "./Reports.css"

function Reports() {
  const [month, setMonth] = useState("All")
  const [status, setStatus] = useState("All")

  const filteredReports = reportData.filter((report) => {
    const matchMonth =
      month === "All" || report.month === month

    const matchStatus =
      status === "All" || report.status === status

    return matchMonth && matchStatus
  })

  const completedCount = reportData.filter(
    (r) => r.status === "Completed"
  ).length

  const pendingCount = reportData.filter(
    (r) => r.status === "Pending"
  ).length

  return (
    <div className="reports-page">

      <h2>Reports</h2>

      {/* Filters */}
      <div className="filters">

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option>All</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>

        <select>
          <option>Export</option>
          <option>Export Excel</option>
          <option>Export PDF</option>
        </select>

      </div>

      {/* Summary */}
      <div className="summary">

        <div className="summary-card">
          Completed: {completedCount}
        </div>

        <div className="summary-card">
          Pending: {pendingCount}
        </div>

      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Month</th>
            <th>Status</th>
            <th>Created By</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {filteredReports.map((report) => (
            <tr key={report.id}>
              <td>{report.title}</td>
              <td>{report.month}</td>
              <td>
                <span
                  className={`status ${report.status}`}
                >
                  {report.status}
                </span>
              </td>
              <td>{report.createdBy}</td>
              <td>{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Reports