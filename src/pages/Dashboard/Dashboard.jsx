import { useContext } from "react"
import { AppContext } from "../../context/ AppContext"
import SummaryCard from "../../components/Cards/SummaryCard"
import "./Dashboard.css"
import { activities } from "../../data/activities"
import ActivityTable from "../../components/Table/ActivityTable"
import PieChartBox from "../../components/Charts/PieChartBox"
import BarChartBox from "../../components/Charts/BarChartBox"

function Dashboard() {
  const { state } = useContext(AppContext)

  return (
    <div className="dashboard">

  <div className="welcome">
    <h2>Welcome back, {state.user.name} 👋</h2>
    <p>Here’s what’s happening in your portal today.</p>
  </div>

  <div className="card-grid">
    <SummaryCard title="Total Users" value="1,245" />
    <SummaryCard title="Total Reports" value="320" />
    <SummaryCard title="Active Status" value="98%" />
  </div>

  <ActivityTable data={activities} />
  <div className="charts-grid">
  <PieChartBox />
  <BarChartBox />
</div>

</div>
  )
}

export default Dashboard