import { useNavigate, useParams } from "react-router"
import useApi from "../../../api/Api"
import KeyData from "../../../components/chartComponents/KeyData"
import "../profile.css"

function PageKeyData( ) {
  
  const navigate = useNavigate()
  const { id:userId } = useParams()
  
  // useApi is used to get the active mode
  const { api } = useApi()

  // The mock or back API is used
  const { data:keyData, loading, loaded, error } = api.useGetKeyData(userId)

  // Error 500 management
  if (error) {
    navigate("/error/",{state:{code:500, message:error}})
    return <></>
  }
  
  // Error 404 management
  if (loaded && !keyData) {
    navigate("/error/",{state:{code:404, message:"Données non trouvées !"}})
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
      <KeyData keyData={keyData} />
  )
}

export default PageKeyData
