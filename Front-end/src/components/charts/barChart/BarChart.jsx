import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer,
} from "recharts"
import PropTypes from "prop-types"
import "./barChart.css"

/***** Chart for the activities ******/

function getActivitiesData(sessions) {
    return sessions.map((session, index) => ({
        // Instead of displaying the dates => numbers starting from 1
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories
    }))
}

function BarChartActivities({ sessions }) {
  
    // Toopltip customisation
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="customTooltip">
                    <div className="tooltipDetails">
                        <p className="label">{payload[0].payload.kilogram}g</p>
                        <p className="label">{payload[0].payload.calories}Kcal</p>
                    </div>
                </div>
            )
        }
        return null
    }

    // Legend customisation
    const CustomLegend = ({ payload }) => {
        return (
            <div className="customLegend">
                {payload.map((entry, index) => (
                    <div className="icon-and-text" key={`item-${index}`}>
                        <div className="icon" style={{ backgroundColor: entry.color }}/>
                        <span className="text">{entry.value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}</span>
                    </div>
                ))}
            </div>
        )
    }

    return (
    <ResponsiveContainer className="bar-chart-container">
        <BarChart data={getActivitiesData(sessions)} barGap={8} >
            <CartesianGrid strokeDasharray="2 2" stroke="#DEDEDE" />
            <XAxis dataKey="day" tickMargin={15} />
            <YAxis orientation="right" tickMargin={20} />
            <Tooltip
                content={<CustomTooltip />} 
                cursor={{fill: "#DFDFDF"}}
            />
            <Legend
                layout="horizontal"
                verticalAlign="top"
                content={<CustomLegend/>}
            />
            <Bar 
                className="first-bar"
                dataKey="kilogram" 
                radius={[3, 3, 0, 0]}
                barSize={7}
                fill="#282D30"
            />
            <Bar 
                className="second-bar"
                dataKey="calories" 
                radius={[3, 3, 0, 0]}
                barSize={7}
                fill="#E60000"
            />
            <text
                className="title-text"
                x={0}
                y={20}
                textAnchor="start"
            >
                Activité quotidienne
            </text>
        </BarChart>
    </ResponsiveContainer>
    )
}

BarChartActivities.propTypes = {
    sessions: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.node.isRequired,
            kilogram: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,

    payload: PropTypes.node,
    active: PropTypes.node,
}

export default BarChartActivities