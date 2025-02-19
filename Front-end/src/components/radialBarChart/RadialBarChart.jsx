import { 
  RadialBarChart, 
  RadialBar, 
  Legend, 
  ResponsiveContainer 
} from "recharts"
import PropTypes from "prop-types"
import "./radialBarChart.css"

function getScoreData(score) {
  return [
    {
      name: "Score",
      value: score,  
    }
  ]
}

function RadialBarChartScore({ score }) {

  return (
      <ResponsiveContainer className="radial-bar-chart-container">
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="80%" 
          outerRadius="70%" 
          barSize={10} 
          data={getScoreData(score)}
          // Angle starting point
          startAngle={90}
          // Then dynamic calculation of the end angle
          endAngle={90 + (score * 360)}
        >

        <circle cx="50%" cy="50%" r="31%" fill="#FFFFFF" />
        
          <RadialBar
              clockWise
              dataKey="value"
              fill="#FF0000"
              cornerRadius={50}
          />

            <text className="text-score"
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {/* Value multiplied by 100 (since we have 0.% in the data) */}
              {`${(score * 100).toFixed(0)}%`}
            </text>

            <text 
              className="text-goal"
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              de votre objectif
            </text>

            <Legend 
              iconSize={10} 
              layout="vertical" 
              verticalAlign="middle" 
              wrapperStyle={{ top: 24, left: 10, lineHeight: "24px" }}
            />
        
        </RadialBarChart>
      </ResponsiveContainer>
  )
}

RadialBarChartScore.propTypes = {
  score: PropTypes.number.isRequired,
}

export default RadialBarChartScore
