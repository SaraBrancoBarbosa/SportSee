import PropTypes from "prop-types"
import "./card.css"

// Card component for the key data

const iconMap = {
    "Calories": "/assets/icons/calorie.svg",
    "Protéines": "/assets/icons/protein.svg",
    "Glucides": "/assets/icons/carbohydrate.svg",
    "Lipides": "/assets/icons/lipid.svg"
}

function CardKeyData({ backgroundColor, label, value }) {

    const icon = iconMap[label] || ""

    return (
		<div className="card">

			<div className="icon-container" style={{ backgroundColor: backgroundColor}}>
                <img src={icon} className="icon" alt={label}></img>
            </div>

            <div className="text-container">
                <p className="text-value">{value}</p>
                <p className="text-label">{label}</p>
            </div>
				
		</div>
	)
}

CardKeyData.propTypes = {
	icon: PropTypes.string,
	backgroundColor: PropTypes.string,
	label: PropTypes.string,
    value: PropTypes.string,
}

export default CardKeyData