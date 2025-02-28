import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import Performances from "../../../components/chartComponents/Performances"
import "../profile.css"

function PagePerformances( ) {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // useApi is used to get the active mode
  const { api } = useApi()

  // The mock or back API is used
  const { data:performances, loading, loaded, error } = api.useGetPerformances(userId)

  // Error 500 management
  if (error) {
    navigate("/error/",{state:{code:500, message:error}})
    return <></>
  }

  // Error 404 management
  if (loaded && !performances) {
    navigate("/error/",{state:{code:404, message:"Performances non trouvées !"}})
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
      <Performances performances={performances} />
  )
}

export default PagePerformances
