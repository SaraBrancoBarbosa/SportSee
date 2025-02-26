import PropTypes from "prop-types"
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts"
import "./lineChart.css"

/***** Chart for the average sessions ******/

// Naming the days on the chart
function getAverageSessionsData(sessions) {
  const daysArray = ["L", "M", "M", "J", "V", "S", "D"]

  // To get "day" and "sessionLength" data
  return sessions.map((session) => ({
    day: daysArray[session.day - 1],
    sessionLength: session.sessionLength,
  }))
}

function LineChartAverageSessions({ sessions }) {
  
  // Tooltip customisation
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <div className="tooltipDetails">
            <p className="label">{payload[0].payload.sessionLength} min</p>          
          </div>
        </div>
      )
    }
    return null
  }

  // For the background black opacity when hover
  const CustomHover = ({ points }) => {
    return (
      <rect 
        x={points[0].x}
        y="0"
        height="100%"
        width="100%"
        fill="#00000010"
      />
    )
  }

  return (
    <ResponsiveContainer className="line-chart-container" >
      <LineChart 
        data={getAverageSessionsData(sessions)} 
        accessibilityLayer 
        width="100%" 
        height="100%" 
        margin={{left: 20, right: 20}}
      >

        {/* For the white line gradient */}
        <defs>
          <linearGradient id="opacityGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>

        <text 
          fill="#FFFFFF" 
          fillOpacity="50%" 
          fontSize="0.938rem"
          fontWeight="medium"
          x="25px"
          y="40px"
          className="text"
        >
          Durée moyenne <tspan x="25px" dy="1.2em">des sessions</tspan>
        </text>
        
        <XAxis dataKey="day" />

        <YAxis hide={true} domain={["dataMin - 5", "dataMax + 20"]} />

        <Tooltip
          content={<CustomTooltip />}
          cursor={<CustomHover />}
        />

        <Line
          className="line-stroke"
          type="monotone"
          dataKey="sessionLength"
          activeDot={{ 
            r: 4,
            strokeOpacity: 0.3,
            strokeWidth: 10,
            fill: "#FFFFFF",
            fillOpacity: 1,
          }}
          stroke="url(#opacityGradient)"
          strokeWidth={2}
        ></Line>
        
      </LineChart>
    </ResponsiveContainer>
  )
}

LineChartAverageSessions.propTypes = {
  
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,

  active: PropTypes.node,
  payload: PropTypes.node,
  points: PropTypes.array

}

export default LineChartAverageSessions