import RadialBarChartScore from "../charts/radialBarChart/RadialBarChart"
import PropTypes from "prop-types"

const Score = ({score}) => {

  return (
    <div className="chart">
      <RadialBarChartScore score={score} />
    </div>
  )
  
}

Score.propTypes = {
  score: PropTypes.number
}

export default Score
