import "./radialBarChart.css"
import { 
    RadialBarChart, 
    RadialBar, 
    Legend, 
    ResponsiveContainer 
} from "recharts"
import PropTypes from "prop-types"

function RadialBarChartScore({ score }) {

  const data = [
    {
      name: "Score",
      // On multiplie la valeur par 100 (puisqu'on a du 0.% dans les data)
      value: score * 100,  
    }
  ]

  const style = {
    top: 24,
    left: 10,
    //transform: 'translate(0, -50%)',
    lineHeight: "24px",
  }

  return (
      <ResponsiveContainer className="radial-bar-chart-container">
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="80%" 
          outerRadius="70%" 
          barSize={10} 
          data={data}
          // Point de départ de l'angle
          startAngle={90}
          // Puis calcul dynamique de l'angle de fin
          endAngle={90 + (score * 360)}
        >
          <RadialBar
              minAngle={15}
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
              {`${(score * 100).toFixed(0)}%`}
            </text>

            <text className="text-goal"
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              de votre objectif
            </text>

            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        
        </RadialBarChart>
      </ResponsiveContainer>
  )
}

RadialBarChartScore.propTypes = {
  score: PropTypes.number.isRequired,
}

export default RadialBarChartScore
