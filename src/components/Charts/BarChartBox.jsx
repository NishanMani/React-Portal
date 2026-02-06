import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { month: "Jan", completed: 30, pending: 10 },
  { month: "Feb", completed: 45, pending: 15 },
  { month: "Mar", completed: 60, pending: 20 }
]

function BarChartBox() {
  return (
    <div className="chart-card">
      <h3>Monthly Reports</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="completed" fill="#2563eb" />
          <Bar dataKey="pending" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartBox