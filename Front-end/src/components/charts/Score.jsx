import RadialBarChartScore from "../radialBarChart/RadialBarChart"
import PropTypes from "prop-types"

const Score = ({score}) => {
  return (
    <div className="daily">
        <RadialBarChartScore score={score} />
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.arrayOf(PropTypes.object)
}

export default Score
