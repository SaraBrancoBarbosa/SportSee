import BarChartActivities from "../charts/barChart/BarChart"
import PropTypes from "prop-types"

/***** 
 This folder contains components responsible for rendering and displaying chart data.
 The pages call these components.
 *****/

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
