import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import AverageSessions from "../../../components/displayChartsComponents/AverageSessions"
import "../profile.css"

function PageAverageSessions( ) {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // useApi is used to get the active mode
  const { api } = useApi()

  // The mock or back API is used
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
    <AverageSessions sessions={averageSessions.sessions} />
  )
}

export default PageAverageSessions
