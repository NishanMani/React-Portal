import "./SummaryCard.css"

function SummaryCard({ title, value }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  )
}

export default SummaryCard