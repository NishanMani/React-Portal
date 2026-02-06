import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Admin", value: 5 },
  { name: "Users", value: 20 }
]

const COLORS = ["#2563eb", "#10b981"]

function PieChartBox() {
  return (
    <div className="chart-card">
      <h3>User Roles</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartBox