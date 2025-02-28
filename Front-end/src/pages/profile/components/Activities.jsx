import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import Activities from "../../../components/chartComponents/Activities"
import "../profile.css"

/*****  In this folder, the components take care of the data recovery logic and the state mamangement (loading, loaded, error) for each of them *****/

function PageActivities() {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // useApi is used to get the active mode
  const { api } = useApi()

  // The mock or back API is used
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
