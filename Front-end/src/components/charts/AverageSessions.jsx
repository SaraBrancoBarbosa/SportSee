import LineChartAverageSessions from "../lineChart/LineChart"
import PropTypes from "prop-types"

const AverageSessions = ({sessions}) => {
  return (
    <LineChartAverageSessions sessions={sessions} />
  )
}

AverageSessions.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object)
}

export default AverageSessions
