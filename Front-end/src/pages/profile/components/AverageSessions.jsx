import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import AverageSessions from "../../../components/charts/AverageSessions"
import "../profile.css"

function PageAverageSessions( ) {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // On utilise useAPI pour récupérer le mode actif
  const { api } = useApi()

  // On utilise l'API mocked ou back
  const { data:averageSessions, loading, loaded, error } = api.useGetAverageSessions(userId)

  // Error 500 management
  if (error) {
    navigate("/error/",{state:{code:500, message:error}})
    return <></>
  }
  
  // Error 404 management
  if (loaded && !averageSessions) {
    navigate("/error/",{state:{code:404, message:"Sessions non trouvées !"}})
    return <></>
  }

  // Vérification que "sessions" est bien une propriété de "averageSessions"
  const sessionsData = averageSessions?.sessions || []
  
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
    <AverageSessions sessions={sessionsData} />
  )
}

export default PageAverageSessions
