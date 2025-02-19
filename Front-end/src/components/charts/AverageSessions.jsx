import LineChartAverageSessions from "../lineChart/LineChart"
import PropTypes from "prop-types"

const AverageSessions = ({sessions}) => {

  return (
    <div className="chart">
      <LineChartAverageSessions sessions={sessions} />
    </div>
  )
  
}

AverageSessions.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object)
}

export default AverageSessions
