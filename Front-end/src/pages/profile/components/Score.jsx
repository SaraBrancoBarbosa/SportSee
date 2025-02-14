import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import Score from "../../../components/charts/Score"
import "../profile.css"

function PageScore( ) {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // On utilise useAPI pour récupérer le mode actif
  const { api } = useApi()

  // On utilise l'API mocked ou back
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
