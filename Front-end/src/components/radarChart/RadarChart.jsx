import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    PolarRadiusAxis, 
    ResponsiveContainer
} from "recharts"
import "./radarChart.css"

// On renomme les libellés des "kind" sur le radar affiché
const kindLabels = {
    "cardio": "Cardio",
    "energy": "Énergie",
    "endurance": "Endurance",
    "strength": "Force",
    "speed": "Vitesse",
    "intensity": "Intensité"
}

function RadarChartType({ performanceData }) {

    const [radarData, setRadarData] = useState([])

    useEffect(() => {
        if (performanceData) {
            const transformedData = performanceData.data.map(item => ({
                kind: kindLabels[performanceData.kind[item.kind]],
                value: item.value,
            }))

            // On inverse l'ordre d'affichage pour correspondre à la maquette
            const displayReversed = transformedData.reverse()
            setRadarData(displayReversed)
        }
    }, [performanceData])

    // Si les données ne sont pas dispo, ne rien afficher
    if (!radarData.length) {
        return null
    }

    return (
        <ResponsiveContainer className="radar-chart-container">
            <RadarChart cx="50%" cy="50%" data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <PolarRadiusAxis angle={30} />
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

RadarChartType.propTypes = {
    performanceData: PropTypes.shape({
        // Le premier "kind" pour lier les numéros aux libellés
        kind: PropTypes.object.isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
            // Le deuxième "kind" avec le numéro associé à chaque type de performance
            kind: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired,
            })
        ).isRequired
        }).isRequired,
  }

export default RadarChartType