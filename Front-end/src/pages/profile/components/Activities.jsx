import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import Activities from "../../../components/charts/Activities"
import "../profile.css"

function PageActivities() {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // On utilise useAPI pour récupérer le mode actif
  const { api } = useApi()

  // On utilise l'API mocked ou back
  const { data:activities, loading, loaded, error } = api.useGetActivities(userId)

  // Error 500 management
  if (error) {
    navigate("/error/",{state:{code:500, message:error}})
    return <></>
  }
  
  // Error 404 management
  if (loaded && !activities) {
    navigate("/error/",{state:{code:404, message:"Activités non trouvées !"}})
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
    <Activities sessions={activities.sessions} />
  )
}

export default PageActivities
