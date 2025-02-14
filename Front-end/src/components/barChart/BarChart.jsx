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

function getActivitiesData(sessions) {
    return sessions.map((session, index) => ({
        // Au lieu d'afficher les dates, on affiche des chiffres à partir de 1
        day: index + 1,
        kilogram: session.kilogram,
        calories: session.calories
    }))
}

function BarChartActivities({ sessions }) {
  
    // Customisation du tooltip
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

    // Customisation de la légende
    const CustomLegend = ({ payload }) => {
        return (
            <div className="customLegend">
                {payload.map((entry, index) => (
                    <div className="icon-and-text" key={`item-${index}`}>
                        <div className="icon"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text">{entry.value === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}</span>
                    </div>
                ))}
            </div>
        )
    }

    // On affiche le graphique uniquement si barChartData est disponible
    if (!sessions.length) {
        return <></>
    }

    return (
    <ResponsiveContainer className="bar-chart-container">
        <BarChart data={getActivitiesData(sessions)} barCategoryGap={54}>
            <CartesianGrid strokeDasharray="2 2" stroke="#DEDEDE" />
            <XAxis dataKey="day" />
            <YAxis orientation="right" />
            <Tooltip
                content={<CustomTooltip />}
            />
            <Legend
                layout="horizontal"
                verticalAlign="top"
                content={<CustomLegend/>}
            />
            <Bar 
                className="first-bar"
                dataKey="kilogram" 
                barSize={7}
                radius={[3, 3, 0, 0]}
                barGap={8}
                fill="#282D30"
            />
            <Bar 
                className="second-bar"
                dataKey="calories" 
                barSize={7}
                radius={[3, 3, 0, 0]}
                barGap={8}
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