import PropTypes from "prop-types"
import CardKeyData from '../card/Card'

const KeyData = ({keyData}) => {
  console.log(keyData, keyData.lipidCount)

  return (
    <div className="key-data">
        <CardKeyData
        label="Calories"
        value={`${keyData.keyData.calorieCount}kCal`}
        backgroundColor="#FBEAEA"
        />

        <CardKeyData
        label="Protéines"
        value={`${keyData.keyData.proteinCount}g`}
        backgroundColor="#E9F4FB"
        />

        <CardKeyData
        label="Glucides"
        value={`${keyData.keyData.carbohydrateCount}g`}
        backgroundColor="#FBF6E5"
        />

        <CardKeyData
        label="Lipides"
        value={`${keyData.keyData.lipidCount}g`}
        backgroundColor="#FBEAEF"
        />
    </div>
  )
}

KeyData.propTypes = {
    keyData: PropTypes.object
}

export default KeyData
