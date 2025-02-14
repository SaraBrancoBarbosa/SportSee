import BarChartActivities from '../barChart/BarChart'
import PropTypes from "prop-types"

const Activities = ({sessions}) => {
  return (
    <div className="daily">
        <BarChartActivities sessions={sessions} />
    </div>
  )
}

Activities.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.object)
}

export default Activities
