import RadarChartPerformances from "../charts/radarChart/RadarChart"
import PropTypes from "prop-types"

const Performances = ({performances}) => {

    return (
        <div className="chart">
            <RadarChartPerformances performances={performances} />
        </div>
    )

}

Performances.propTypes = {
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

export default Performances
