import PropTypes from "prop-types"
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import "./lineChart.css"

// On nomme les jours à afficher sur le graphique
function getAverageSessionsData(sessions) {
  const daysArray = ["L", "M", "M", "J", "V", "S", "D"]

  // On récupère les données de "day" et "sessionLength"
  return sessions.map((session) => ({
    day: daysArray[session.day - 1],
    sessionLength: session.sessionLength,
  }))
}

function LineChartAverageSessions({ sessions }) {
  
  // Customisation du tooltip
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

  /*
  const [lineChartData, setLineChartData] = useState([])

  // Hook pour gérer les données quand averageSessions change
  useEffect(() => {
    if (averageSessions && averageSessions.sessions) {
      const data = getAverageSessionsData(averageSessions)
      setLineChartData(data)
    }
  }, [averageSessions])
*/

  // On affiche le graphique uniquement si lineChartData est disponible
  if (!sessions.length) {
    return <></>
  }
  
  return (
    <ResponsiveContainer className="line-chart-container">
      <LineChart data={getAverageSessionsData(sessions)} accessibilityLayer>
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
          y="30px"
        >
          Durée moyenne des sessions
        </text>
        
        <XAxis dataKey="day" />

        <Tooltip
          content={<CustomTooltip />}
        />
        <Line
          className="line-stroke"
          type="monotone"
          dataKey="sessionLength"
          activeDot={{ r: 8 }}
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

}

export default LineChartAverageSessions