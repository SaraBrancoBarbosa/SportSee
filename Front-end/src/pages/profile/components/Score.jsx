import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import Score from "../../../components/displayChartsData/Score"
import "../profile.css"

function PageScore( ) {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // useApi is used to get the active mode
  const { api } = useApi()

  // The mock or back API is used
  const { data:score, loading, loaded, error } = api.useGetScore(userId)

  // Error 500 management
  if (error) {
    navigate("/error/",{state:{code:500, message:error}})
    return <></>
  }
  
  // Error 404 management
  if (loaded && !score) {
    navigate("/error/",{state:{code:404, message:"Score non trouvé !"}})
    return <></>
  }
  
  // Loading message
  if (loading || !loaded) {
    return (
    <div className="loading">
        Chargement des informations
        <span className="spinner"></span>
    </div>
    )
  }

  return (
      <Score score={score} />
  )
}

export default PageScore
