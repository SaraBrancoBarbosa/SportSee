import PropTypes from "prop-types"
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    ResponsiveContainer
} from "recharts"
import "./radarChart.css"

/***** Chart for the performances ******/

// Translating the "kind" labels on the chart
const translatedLabels = {
    "cardio": "Cardio",
    "energy": "Énergie",
    "endurance": "Endurance",
    "strength": "Force",
    "speed": "Vitesse",
    "intensity": "Intensité"
}

// To display more correctly the labels on the chart
const CustomAxisLabel = ({payload, x, y, cy, ...props}) => {
    
    // cy: y center of the chart. 
    // y - cy: the difference between the label y position and cy
    const py = cy + (y - cy) * 1.05 + 3

    return (
        <text
           style={{...props}}
           {...props}
           x= {x}
           y= {py}
        >
            {payload.value}
        </text>
    )
}

CustomAxisLabel.propTypes = {
    payload: PropTypes.shape({
        value: PropTypes.string,
    }),
    x: PropTypes.number,
    y: PropTypes.number,
    cx: PropTypes.number,
    cy: PropTypes.number,
}

function getPerformancesData(performances) {
    return performances.data.map(performance => ({
        kind: translatedLabels[performances.kind[performance.kind]],
        value: performance.value,
    })).reverse()
}

function RadarChartPerformances({ performances }) {
    return (
        <ResponsiveContainer className="radar-chart-container">
            <RadarChart 
                cx="50%" 
                cy="50%" 
                data={getPerformancesData(performances)} 
                outerRadius="70%"
            >
                <PolarGrid />
                <PolarAngleAxis 
                    dataKey="kind" 
                    tick={<CustomAxisLabel 
                    style={{fill: "white", fontSize: "12px"}} />} 
                />
                <Radar 
                    name="Performance" 
                    dataKey="value"
                    fill="#FF0101" 
                    fillOpacity={0.7} 
                />
            </RadarChart>
        </ResponsiveContainer>
    )
}

RadarChartPerformances.propTypes = {
    performances: PropTypes.shape({
        kind: PropTypes.object,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                kind: PropTypes.number,
                value: PropTypes.number,
            })
        )
    })
}

export default RadarChartPerformances