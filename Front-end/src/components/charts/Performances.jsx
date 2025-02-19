import RadarChartPerformances from "../radarChart/RadarChart"
import PropTypes from "prop-types"

const Performances = ({performances}) => {

  return (
    <div className="chart">
      <RadarChartPerformances performances={performances} />
    </div>
  )
  
}

Performances.propTypes = {
  performances: PropTypes.arrayOf(
        PropTypes.shape({
            kind: PropTypes.arrayOf(PropTypes.string),
            data: PropTypes.shape(
                PropTypes.arrayOf({
                    kind: PropTypes.number,
                    value: PropTypes.number,
                })
            )
        })
    )
      //performances: PropTypes.arrayOf(PropTypes.array)
}

export default Performances
